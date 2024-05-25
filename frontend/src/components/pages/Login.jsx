import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from "@/components/ui/alert-dialog";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import { getArticleAll } from "../../api/article";
import { signIn, signUp } from "../../api/auth";
import { InputWithLabel } from "../common/InputWithLabel";
import Loader from "../common/Loader";
import Modal from "../common/Modal";
import { Button } from "../ui/button";
import { Label } from "../ui/label";

function Login() {
  const navigate = useNavigate();

  const [messageDialog, setMessageDialog] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordRe, setShowPasswordRe] = useState(false);
  const [cookie, setCookie] = useCookies(['access_token', 'usrId', 'roles']);
  const [isLoading, setIsLoading] = useState(false);
  const [statusDialog, setStatusDialog] = useState("");
  const [articleList, setArticleList] = useState([]);
  const [loginInfo, setLoginInfo] = useState({ usrNm: "", usrPwd: "" });
  const [register, setRegister] = useState({});
  const [validate, setValidate] = useState({});

  const onSubmit = async (e) => {
    e.preventDefault();
    setValidate({});
    if (loginInfo.usrNm.length === 0) setValidate(prev => ({ ...prev, usrNmMessage: "Vui lòng điền tên đăng nhập" }));
    if (loginInfo.usrPwd.length === 0) setValidate(prev => ({ ...prev, usrPwdMessage: "Vui lòng điền mật khẩu" }));
    if (loginInfo.usrNm.length === 0 || loginInfo.usrPwd.length === 0) return;
    try {
      let infoSignIn = await signIn({ username: loginInfo.usrNm, password: loginInfo.usrPwd });
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
  }

  async function handleSubmitRegister() {
    const response = await signUp(register);
    try {
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
  }

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

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="flex items-center justify-center bg-blue-300">
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
            <form className="px-12 w-full">
              <div>
                <InputWithLabel
                  label="Tên đăng nhập"
                  placeholder="Vui lòng điền Email/Phone"
                  type="text" name="usrNm"
                  require
                  handleChange={(e) => setLoginInfo(prev => ({ ...prev, usrNm: e.target.value }))}
                />
                {validate.usrNmMessage ? <Label className="text-red-500">{validate.usrNmMessage}</Label> : null}
                <div className="h-5"></div>
                <InputWithLabel
                  label="Mật khẩu"
                  placeholder="Vui lòng điền mật khẩu"
                  type={showPassword ? 'text' : 'password'} name="usrPwd"
                  require
                  handleChange={(e) => setLoginInfo(prev => ({ ...prev, usrPwd: e.target.value }))}
                  handleClickShowPassword={() => setShowPassword(!showPassword)}
                  handleKeyEnter={onSubmit}
                  showPassword={showPassword}
                />
                {validate.usrPwdMessage ? <Label className="text-red-500">{validate.usrPwdMessage}</Label> : null}
              </div>
              {validate.loginMessage ? <div className="text-center mt-2"><Label className="text-red-500">{validate.loginMessage}</Label></div> : null}
              <div className="mt-2 flex items-center">
                <div className="w-7/12 text-end">
                  <Button variant="primary" onClick={(e) => onSubmit(e)}>Đăng nhập</Button>
                </div>
                <div className="w-5/12 text-end">
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <span className="font-semibold text-blue-500 hover:text-blue-300 underline cursor-pointer">Đăng ký tài khoản</span>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          <p className="font-bold text-xl text-center text-black mb-4">Đăng ký tài khoản</p>
                        </AlertDialogTitle>
                        <div>
                          <InputWithLabel label="Tên đăng nhập" placeholder="Vui lòng điền Username!" type="text" require handleChange={(e) => setRegister({ ...register, username: e.target.value })} />
                          <div className="h-5"></div>
                          <div className="flex gap-4">
                            <InputWithLabel label="Họ" placeholder="Vui lòng điền Họ!" type="text" require handleChange={(e) => setRegister({ ...register, lastName: e.target.value })} />
                            <InputWithLabel label="Tên" placeholder="Vui lòng điền Tên!" type="text" require handleChange={(e) => setRegister({ ...register, firstName: e.target.value })} />
                          </div>
                          <div className="h-5"></div>
                          <div className="flex gap-4">
                            <Popover>
                              <div>
                                <Label after=" *" className="after:content-[attr(after)] after:text-red-600">Date Of Birth</Label>
                                <PopoverTrigger asChild>
                                  <Button
                                    variant={"outline"}
                                    className={cn(
                                      "w-full justify-start text-left font-normal bg-white"
                                    )}
                                  >
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {register.dateOfBirth ? register.dateOfBirth : <span>Pick a date</span>}
                                  </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0">
                                  <Calendar
                                    mode="single"
                                    selected={register.dateOfBirth}
                                    onSelect={(value) => setRegister({ ...register, dateOfBirth: format(value, "dd-MM-yyyy") })}
                                    initialFocus
                                    className="bg-white"
                                  />
                                </PopoverContent>
                              </div>
                            </Popover>
                            <InputWithLabel label="Phone" placeholder="Vui lòng điền Phone Number!" type="text" require handleChange={(e) => setRegister({ ...register, phoneNumber: e.target.value })} />
                          </div>
                          <div className="h-5"></div>
                          <InputWithLabel label="Email" placeholder="Vui lòng điền Email!" type="text" require handleChange={(e) => setRegister({ ...register, email: e.target.value })} />
                          <div className="h-5"></div>
                          <InputWithLabel
                            label="Mật khẩu"
                            placeholder="Vui lòng điền mật khẩu"
                            type={showPasswordRe ? 'text' : 'password'} name="usrPwd"
                            require
                            handleChange={(e) => setRegister({ ...register, password: e.target.value })}
                            handleClickShowPassword={() => setShowPasswordRe(!showPasswordRe)}
                            showPassword={showPasswordRe}
                          />
                        </div>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel id="register-cancel">Cancel</AlertDialogCancel>
                        <Button variant="destructive" className="bg-blue-500" onClick={handleSubmitRegister}>Đăng ký</Button>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>
            </form>
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