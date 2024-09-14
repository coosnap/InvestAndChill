import { zodResolver } from '@hookform/resolvers/zod';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, InputAdornment, TextField, useMediaQuery, useTheme } from '@mui/material';
import { useCallback, useEffect, useId, useState } from 'react';
import { useCookies } from 'react-cookie';
import { Controller, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { getArticleAll } from '../../../api/article';
import { signIn, signUp } from '../../../api/auth';
import Loader from '../../common/Loader';
import Modal from '../../common/Modal';
import { Button } from '../../ui/button';
import { Label } from '../../ui/label';
import { format } from 'date-fns';

import './styles.scss';

const loginSchema = z.object({
  username: z.string().min(1, { message: 'Vui lòng điền tên đăng nhập' }),
  password: z.string().min(1, { message: 'Vui lòng điền mật khẩu' }),
});

const registerSchema = z
  .object({
    username: z.string().min(1, { message: 'Vui lòng điền tên đăng nhập' }),
    password: z.string().min(1, { message: 'Vui lòng điền mật khẩu' }),
    passwordConfirm: z.string().min(1, { message: 'Vui lòng xác nhận mật khẩu' }),
    email: z.string().email({ message: 'Vui lòng điền đúng định dạng email' }),
    firstName: z.string().min(1, { message: 'Vui lòng điền tên' }),
    lastName: z.string().min(1, { message: 'Vui lòng điền họ' }),
    phoneNumber: z.string().min(1, { message: 'Vui lòng điền số điện thoại' }),
    dateOfBirth: z.string().transform((value) => new Date(value)),
  })
  .superRefine(({ passwordConfirm, password, dateOfBirth }, ctx) => {
    if (passwordConfirm !== password) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Xác nhận mật khẩu không đúng',
        path: ['passwordConfirm'],
      });
    }
    if (dateOfBirth) {
      if (Number(isNaN(dateOfBirth.getTime()))) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Vui lòng điền ngày sinh',
          path: ['dateOfBirth'],
        });
      }
    }
  });

function Login() {
  const id = useId();
  const navigate = useNavigate();
  const theme = useTheme();
  const lg = useMediaQuery(theme.breakpoints.up('lg'));

  const [showModal, setShowModal] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [showRegisterDialog, setShowRegisterDialog] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordRe, setShowPasswordRe] = useState(false);
  const [showPasswordConf, setShowPasswordConf] = useState(false);
  const [cookie, setCookie] = useCookies(['access_token', 'usrId', 'roles']);
  const [isLoading, setIsLoading] = useState(false);
  const [statusDialog, setStatusDialog] = useState('');
  const [articleList, setArticleList] = useState([]);
  const [validate, setValidate] = useState({});

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: 'all',
    defaultValues: {
      username: '',
      password: '',
    },
    resolver: zodResolver(loginSchema),
  });

  const {
    handleSubmit: handleSubmitRegister,
    control: controlRegister,
    formState: { errors: errorsRegister },
  } = useForm({
    mode: 'all',
    defaultValues: {
      username: '',
      password: '',
      passwordConfirm: '',
      email: '',
      firstName: '',
      lastName: '',
      phoneNumber: '',
      dateOfBirth: '',
    },
    resolver: zodResolver(registerSchema),
  });

  const onSubmitRegister = useCallback(async (values) => {
    try {
      let data = {
        ...values,
        dateOfBirth: format(values.dateOfBirth, 'dd-MM-yyyy'),
      };
      const response = await signUp(data);
      const responseBody = await response.json();
      if (responseBody.message) {
        setStatusDialog('Success');
        setShowModal(true);
      }
    } catch (error) {
      console.log('error', error);
      setStatusDialog('Error');
      setShowModal(true);
    }
  }, []);

  const onSubmit = useCallback(async (values) => {
    setValidate({});
    try {
      let infoSignIn = await signIn(values);
      setIsLoading(true);
      if (infoSignIn) {
        let d = new Date();
        d.setTime(d.getTime() + d.getMinutes() * 60 * 10000);
        setCookie(
          'usrId',
          {
            id: infoSignIn.id,
            usrNm: infoSignIn.username,
            email: infoSignIn.email,
          },
          { path: '/', expires: d }
        );
        setCookie('access_token', infoSignIn.token, { path: '/', expires: d });
        setCookie('roles', infoSignIn.roles, { path: '/', expires: d });
        setIsLoading(false);
        infoSignIn.roles.includes('ROLE_ADMIN') ||
        infoSignIn.roles.includes('ROLE_MODERATOR_ARTICLE') ||
        infoSignIn.roles.includes('ROLE_MODERATOR_USER')
          ? navigate('/admin')
          : navigate('/invest');
      } else {
        setIsLoading(false);
        setValidate((prev) => ({
          ...prev,
          loginMessage: 'Tên đăng nhập hoặc mật khẩu không đúng',
        }));
      }
    } catch (error) {
      setShowDialog(true);
      console.error(error);
    }
  }, []);

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
    if (cookie.access_token && (location.pathname == '/' || location.pathname == '/login')) {
      if (
        cookie.roles.includes('ROLE_ADMIN') ||
        cookie.roles.includes('ROLE_MODERATOR_USER') ||
        cookie.roles.includes('ROLE_MODERATOR_ARTICLE')
      )
        navigate('/admin');
      else navigate('/invest');
    }
  }, []);

  return (
    <div className="flex items-center justify-center bg-blue-300">
      {isLoading ? <Loader /> : ''}
      <div className="container w-[80%] h-screen py-10 flex gap-8">
        <div className="flex flex-col w-[752px] h-full gap-8">
          <div className="rounded-2xl bg-white flex flex-col h-[600px] justify-center pl-12">
            <h1 className="text-6xl md:text-4xl lg:text-6xl  text-gray-900 mb-5">
              Tiết kiệm thời gian
            </h1>
            <h4 className="text-3xl text-gray-900 mb-4">Tiếp cận hệ thống dữ liệu tài chính</h4>
            <p className="text-xl text-gray-900">Chính xác - Cập nhật - Đầy đủ</p>
          </div>
          <div className="rounded-2xl bg-white h-[210px] flex flex-col justify-center px-12 py-2">
            {articleList &&
              articleList.length > 0 &&
              articleList.map(
                (e, i) =>
                  i <= 4 && (
                    <Link
                      to={'/post/' + e.id}
                      className={`${
                        i <= 3 ? 'border-b' : ''
                      } text-gray-900 mb-1 cursor-pointer pb-1`}
                      key={e.id}
                    >
                      {e.title}
                    </Link>
                  )
              )}
          </div>
        </div>
        <div className="flex flex-col w-[752px] h-full gap-8">
          <div className="rounded-2xl bg-white shadow-2xl flex flex-col items-center justify-center py-4">
            <div className="flex items-center justify-center text-3xl lg:text-2xl font-semibold text-gray-900">
              Đăng nhập
            </div>
            <form key={id} onSubmit={handleSubmit(onSubmit)} className="px-12 w-full">
              <div className="h-1 2xl:h-3"></div>
              <Controller
                name="username"
                control={control}
                render={({ field }) => (
                  <TextField
                    required
                    name="username"
                    className="w-full z-0"
                    size="small"
                    label="Tên đăng nhập"
                    type="text"
                    error={!!errors?.username}
                    helperText={errors?.username?.message}
                    {...field}
                  />
                )}
              />
              <div className="h-1 2xl:h-3"></div>
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <TextField
                    required
                    name="password"
                    className="w-full z-0"
                    label="Mật khẩu"
                    size="small"
                    error={!!errors?.password}
                    type={!showPassword ? 'password' : 'text'}
                    helperText={errors?.password?.message}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => setShowPassword(!showPassword)}
                            edge="end"
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    {...field}
                  />
                )}
              />
              {validate.loginMessage ? (
                <div className="text-center mt-2">
                  <Label className="text-red-500">{validate.loginMessage}</Label>
                </div>
              ) : null}
              <div className="flex items-center">
                <div className="w-1/2 text-end">
                  <Button type="submit" variant="primary" className="mt-2">
                    Đăng nhập
                  </Button>
                </div>
                <div className="w-1/2 text-end">
                  <span
                    className="mt-4 lg:mt-2 font-semibold text-blue-500 hover:text-blue-300 underline cursor-pointer"
                    onClick={() => setShowRegisterDialog(true)}
                  >
                    Đăng ký tài khoản
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div
          className={`${
            showRegisterDialog ? '' : 'hidden'
          } absolute top-0 left-0 w-full h-full opacity-50 bg-black`}
        ></div>
        <div className={`${showRegisterDialog ? '' : 'hidden'} absolute top-[5%] left-[40%]`}>
          <div className="w-[500px] py-10 bg-white rounded-lg shadow-2xl">
            <div className="px-10">
              <div>
                <div>
                  <p className="font-bold text-xl text-center text-black mb-4">Đăng ký tài khoản</p>
                </div>
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
                        size="small"
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
                          size="small"
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
                          size="small"
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
                      rules={{ required: true }}
                      render={({ field }) => {
                        return (
                          <TextField
                            required
                            className="w-1/2"
                            name="dateOfBirth"
                            type="date"
                            size="small"
                            error={!!errorsRegister?.dateOfBirth}
                            helperText={errorsRegister?.dateOfBirth?.message}
                            {...field}
                          />

                          // <LocalizationProvider dateAdapter={AdapterDayjs}>
                          //   <DatePicker
                          //     label={"Ngày sinh"}
                          //     format="DD/MM/YYYY"
                          //     className="w-1/2 z-50"
                          //     slotProps={{
                          //       textField: {
                          //         required: true,
                          //         error: !!errorsRegister?.dateOfBirth,
                          //         helperText:
                          //           errorsRegister?.dateOfBirth?.message,
                          //         onBlur: field.onBlur,
                          //       },
                          //     }}
                          //   />
                          // </LocalizationProvider>
                        );
                      }}
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
                          size="small"
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
                        size="small"
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
                        size="small"
                        error={!!errorsRegister?.password}
                        type={!showPasswordRe ? 'password' : 'text'}
                        helperText={errorsRegister?.password?.message}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={() => setShowPasswordRe(!showPasswordRe)}
                                edge="end"
                              >
                                {showPasswordRe ? <VisibilityOff /> : <Visibility />}
                              </IconButton>
                            </InputAdornment>
                          ),
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
                        size="small"
                        error={!!errorsRegister?.passwordConfirm}
                        type={!showPasswordConf ? 'password' : 'text'}
                        helperText={errorsRegister?.passwordConfirm?.message}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={() => setShowPasswordConf(!showPasswordConf)}
                                edge="end"
                              >
                                {showPasswordConf ? <VisibilityOff /> : <Visibility />}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                        {...field}
                      />
                    )}
                  />
                  <div className="text-end mt-6">
                    <Button
                      type="button"
                      variant="secondary"
                      className="mr-2 border"
                      onClick={() => setShowRegisterDialog(false)}
                    >
                      Cancel
                    </Button>
                    <Button type="submit" variant="primary">
                      Đăng ký
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showDialog && (
        <Modal
          handleClickModal={() => setShowDialog(false)}
          message={'Tên người dùng hoặc Mật khẩu không đúng.'}
          status="Error"
        />
      )}
      {showModal && (
        <Modal
          handleClickModal={() => setShowModal(false)}
          message={'Đăng ký thất bại.'}
          status={statusDialog}
        />
      )}
    </div>
  );
}

export default Login;
