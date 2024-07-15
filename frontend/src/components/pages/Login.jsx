import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from "@/components/ui/alert-dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { useCallback, useEffect, useId, useState } from "react";
import { useCookies } from "react-cookie";
import { Controller, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { getArticleAll } from "../../api/article";
import { signIn } from "../../api/auth";
import Loader from "../common/Loader";
import Modal from "../common/Modal";
import { Button } from "../ui/button";
import { Label } from "../ui/label";

const loginSchema = z.object({
  username: z.string().min(1, { message: "Vui lòng điền tên đăng nhập" }),
  password: z.string().min(1, { message: "Vui lòng điền mật khẩu" }),
})

const registerSchema = z.object({
  username: z.string().min(1, { message: "Vui lòng điền tên đăng nhập" }),
  password: z.string().min(1, { message: "Vui lòng điền mật khẩu" }),
  passwordConfirm: z.string().min(1, { message: "Vui lòng xác nhận mật khẩu" }),
  email: z.string().email({ message: "Vui lòng điền đúng định dạng email" }),
  firstName: z.string().min(1, { message: "Vui lòng điền tên" }),
  lastName: z.string().min(1, { message: "Vui lòng điền họ" }),
  phoneNumber: z.string().min(1, { message: "Vui lòng điền số điện thoại" }),
  dateOfBirth: z.string().transform((value) => new Date(value)),
}).superRefine(({ passwordConfirm, password, dateOfBirth }, ctx) => {
  if (passwordConfirm !== password) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Xác nhận mật khẩu không đúng",
      path: ['passwordConfirm']
    });
  }
  if (dateOfBirth) {
    if (Number(isNaN(dateOfBirth.getTime()))) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Vui lòng điền ngày sinh",
        path: ['dateOfBirth']
      });
    }
  }
});

function Login() {
  const id = useId();
  const navigate = useNavigate();

  const [messageDialog, setMessageDialog] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordRe, setShowPasswordRe] = useState(false);
  const [showPasswordConf, setShowPasswordConf] = useState(false);
  const [cookie, setCookie] = useCookies(['access_token', 'usrId', 'roles']);
  const [isLoading, setIsLoading] = useState(false);
  const [statusDialog, setStatusDialog] = useState("");
  const [articleList, setArticleList] = useState([]);
  const [validate, setValidate] = useState({});

  const { handleSubmit, control, formState: { errors } } = useForm({
    mode: 'all',
    defaultValues: {
      username: "",
      password: ""
    },
    resolver: zodResolver(loginSchema)
  });

  const { handleSubmit: handleSubmitRegister, control: controlRegister, formState: { errors: errorsRegister } } = useForm({
    mode: 'all',
    defaultValues: {
      username: "",
      password: "",
      passwordConfirm: "",
      email: '',
      firstName: '',
      lastName: '',
      phoneNumber: '',
      dateOfBirth: ''
    },
    resolver: zodResolver(registerSchema)
  });

  const onSubmitRegister = useCallback(async (values) => {
    try {
      let data = { ...values };
      const response = await signUp(data);
      const responseBody = await response.json();
      if (responseBody.message) {
        setStatusDialog("Success");
        setShowModal(true);
        setMessageDialog(responseBody.message);
        document.getElementById('register-cancel')?.click();
      }
    } catch (error) {
      setStatusDialog("Error");
      setShowModal(true);
      setMessageDialog(response.message);
    }
  }, [])

  const onSubmit = useCallback(async (values) => {
    setValidate({});
    try {
      let infoSignIn = await signIn(values);
      setIsLoading(true);
      if (infoSignIn) {
        let d = new Date();
        d.setTime(d.getTime() + (d.getMinutes() * 60 * 10000));
        setCookie("usrId", { id: infoSignIn.id, usrNm: infoSignIn.username, email: infoSignIn.email }, { path: "/", expires: d });
        setCookie("access_token", infoSignIn.token, { path: "/", expires: d });
        setCookie("roles", infoSignIn.roles, { path: "/", expires: d });
        setIsLoading(false);
        (infoSignIn.roles.includes('ROLE_ADMIN') || infoSignIn.roles.includes('ROLE_MODERATOR_ARTICLE') || infoSignIn.roles.includes('ROLE_MODERATOR_USER')) ? navigate("/admin") : navigate("/invest");
      } else {
        setIsLoading(false);
        setValidate(prev => ({ ...prev, loginMessage: "Tên đăng nhập hoặc mật khẩu không đúng" }))
      }
    } catch (error) {
      setShowDialog(true);
      console.error(error);
    }
  }, [])

  async function getData() {
    setIsLoading(true);
    try {
      const article = await getArticleAll();
      setArticleList(article);
    } catch (error) {
      setArticleList([]);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    getData();
    if (cookie.access_token && (location.pathname == "/" || location.pathname == "/login")) {
      if (cookie.roles.includes("ROLE_ADMIN") || cookie.roles.includes("ROLE_MODERATOR_USER") || cookie.roles.includes("ROLE_MODERATOR_ARTICLE")) navigate("/admin");
      else navigate("/invest");
    }
  }, [])

  return (
    <div className="flex items-center justify-center bg-blue-300">
      {isLoading ? <Loader /> : ""}
      <div className="container h-[100vh] py-10 flex gap-8">
        <div className="flex flex-col w-1/2 h-full gap-8">
          <div className="rounded-2xl bg-white h-2/3 flex flex-col justify-center pl-12">
            <h1 className="text-7xl text-gray-900 mb-5">Tiết kiệm thời gian</h1>
            <h4 className="text-3xl text-gray-900 mb-4">Tiếp cận hệ thống dữ liệu tài chính</h4>
            <p className="text-xl text-gray-900">Chính xác - Cập nhật - Đầy đủ</p>
          </div>
          <div className="rounded-2xl bg-white h-1/3 flex flex-col justify-center px-12">
            {articleList.map(e =>
              <Link to={"/post/" + e.id} className="text-gray-900 mb-3 cursor-pointer border-b pb-1" key={e.id}>{e.title}</Link>
            )}
          </div>
        </div>

        <div className="flex flex-col w-1/2 h-full gap-8">
          <div className="rounded-2xl bg-white shadow-2xl h-2/5 flex flex-col items-center justify-center">
            <div className="flex items-center justify-center text-3xl font-semibold text-gray-900">Đăng nhập</div>
            <form key={id} onSubmit={handleSubmit(onSubmit)} className="px-12 w-full">
              <div className="h-5"></div>
              <Controller
                name="username"
                control={control}
                render={({ field }) => (
                  <TextField
                    required
                    name="username"
                    className="w-full"
                    label="Tên đăng nhập"
                    type="text"
                    error={!!errors?.username}
                    helperText={errors?.username?.message}
                    {...field}
                  />
                )}
              />
              <div className="h-5"></div>
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <TextField
                    required
                    name="password"
                    className="w-full"
                    label="Mật khẩu"
                    error={!!errors?.password}
                    type={!showPassword ? 'password' : 'text'}
                    helperText={errors?.password?.message}
                    InputProps={{
                      endAdornment:
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => setShowPassword(!showPassword)}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>

                    }}
                    {...field}
                  />
                )}
              />
              {validate.loginMessage ? <div className="text-center mt-2"><Label className="text-red-500">{validate.loginMessage}</Label></div> : null}
              <div className="mt-2 text-center">
                <Button type="submit" variant="primary" className="mt-2">Đăng nhập</Button>
              </div>
            </form>
            <div className="mt-4">
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <span className="font-semibold text-blue-500 hover:text-blue-300 underline cursor-pointer">Đăng ký tài khoản</span>
                </AlertDialogTrigger>
                <AlertDialogContent className="px-10">
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      <p className="font-bold text-xl text-center text-black mb-4">Đăng ký tài khoản</p>
                    </AlertDialogTitle>
                    <form key={id} onSubmit={handleSubmitRegister(onSubmitRegister)}>
                      <Controller
                        name="username"
                        control={controlRegister}
                        render={({ field }) => (
                          <TextField
                            required
                            name="username"
                            className="w-full"
                            label="Tên đăng nhập"
                            type="text"
                            error={!!errorsRegister?.username}
                            helperText={errorsRegister?.username?.message}
                            {...field}
                          />
                        )}
                      />
                      <div className="h-5"></div>
                      <div className="flex gap-4">
                        <Controller
                          name="lastName"
                          control={controlRegister}
                          render={({ field }) => (
                            <TextField
                              required
                              name="lastName"
                              className="w-1/2"
                              label="Họ"
                              type="text"
                              error={!!errorsRegister?.lastName}
                              helperText={errorsRegister?.lastName?.message}
                              {...field}
                            />
                          )}
                        />
                        <Controller
                          name="firstName"
                          control={controlRegister}
                          render={({ field }) => (
                            <TextField
                              required
                              name="firstName"
                              className="w-1/2"
                              label="Tên"
                              type="text"
                              error={!!errorsRegister?.firstName}
                              helperText={errorsRegister?.firstName?.message}
                              {...field}
                            />
                          )}
                        />
                      </div>
                      <div className="h-5"></div>
                      <div className="flex gap-4">
                        <Controller
                          name="dateOfBirth"
                          control={controlRegister}
                          render={({ field }) => (
                            <TextField
                              required
                              className="w-1/2"
                              name="dateOfBirth"
                              type="date"
                              error={!!errorsRegister?.dateOfBirth}
                              helperText={errorsRegister?.dateOfBirth?.message}
                              {...field}
                            />
                          )}
                        />
                        <Controller
                          name="phoneNumber"
                          control={controlRegister}
                          render={({ field }) => (
                            <TextField
                              required
                              name="phoneNumber"
                              className="w-1/2"
                              label="Số điện thoại"
                              type="text"
                              error={!!errorsRegister?.phoneNumber}
                              helperText={errorsRegister?.phoneNumber?.message}
                              {...field}
                            />
                          )}
                        />
                      </div>
                      <div className="h-5"></div>
                      <Controller
                        name="email"
                        control={controlRegister}
                        render={({ field }) => (
                          <TextField
                            required
                            name="email"
                            className="w-full"
                            label="Email"
                            type="text"
                            error={!!errorsRegister?.email}
                            helperText={errorsRegister?.email?.message}
                            {...field}
                          />
                        )}
                      />
                      <div className="h-5"></div>
                      <Controller
                        name="password"
                        control={controlRegister}
                        render={({ field }) => (
                          <TextField
                            required
                            name="password"
                            className="w-full"
                            label="Mật khẩu"
                            error={!!errorsRegister?.password}
                            type={!showPasswordRe ? 'password' : 'text'}
                            helperText={errorsRegister?.password?.message}
                            InputProps={{
                              endAdornment:
                                <InputAdornment position="end">
                                  <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={() => setShowPasswordRe(!showPasswordRe)}
                                    edge="end"
                                  >
                                    {showPasswordRe ? <VisibilityOff /> : <Visibility />}
                                  </IconButton>
                                </InputAdornment>

                            }}
                            {...field}
                          />
                        )}
                      />
                      <div className="h-5"></div>
                      <Controller
                        name="passwordConfirm"
                        control={controlRegister}
                        render={({ field }) => (
                          <TextField
                            required
                            name="passwordConfirm"
                            className="w-full"
                            label="Xác nhận mật khẩu"
                            error={!!errorsRegister?.passwordConfirm}
                            type={!showPasswordConf ? 'password' : 'text'}
                            helperText={errorsRegister?.passwordConfirm?.message}
                            InputProps={{
                              endAdornment:
                                <InputAdornment position="end">
                                  <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={() => setShowPasswordConf(!showPasswordConf)}
                                    edge="end"
                                  >
                                    {showPasswordConf ? <VisibilityOff /> : <Visibility />}
                                  </IconButton>
                                </InputAdornment>

                            }}
                            {...field}
                          />
                        )}
                      />
                      <AlertDialogFooter className="mt-6">
                        <AlertDialogCancel id="register-cancel">Cancel</AlertDialogCancel>
                        <Button type="submit" variant="primary" className="bg-blue-500">Đăng ký</Button>
                      </AlertDialogFooter>
                    </form>
                  </AlertDialogHeader>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        </div>
      </div >
      {showDialog && <Modal handleClickModal={() => setShowDialog(false)} message={"Invalid login Username or Password."} status="Error" />
      }
      {showModal && <Modal handleClickModal={() => setShowModal(false)} message={messageDialog} status={statusDialog} />}
    </div >
  );
}

export default Login;