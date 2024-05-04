import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { signIn } from "../../api/auth";
import { useEffect } from "react";
import Register from "../common/Register";
import Modal from "../common/Modal";
import { getArticleAll } from "../../api/article";
import Loader from "../common/Loader";
import { InputWithLabel } from "../common/InputWithLabel";
import { Button } from "../ui/button";

function Login() {
  const navigate = useNavigate();
  const [messageDialog, setMessageDialog] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [cookie, setCookie] = useCookies(['access_token', 'usrId', 'roles']);
  const [isLoading, setIsLoading] = useState(false);
  const [statusDialog, setStatusDialog] = useState("");
  const [articleList, setArticleList] = useState([]);
  const [loginInfo, setLoginInfo] = useState({ usrNm: "", usrPwd: "" });

  function handleChangeUsrNm(e) {
    setLoginInfo(prev => ({ ...prev, usrNm: e.target.value }))
  }

  function handleChangePwd(e) {
    setLoginInfo(prev => ({ ...prev, usrPwd: e.target.value }))
  }

  const handleClickDialog = () => setShowDialog(false);

  const handleClickModal = () => {
    setShowModal(false)
    if (statusDialog === "Success") {
      setShowRegister(false)
    }
  };
  const handleClickRegister = () => setShowRegister(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const handleSubmitLogin = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      let infoSignIn = await signIn({ username: loginInfo.usrNm, password: loginInfo.usrPwd });
      if (infoSignIn) {
        let d = new Date();
        d.setTime(d.getTime() + (d.getMinutes() * 60 * 10000));
        setCookie("usrId", { id: infoSignIn.id, usrNm: infoSignIn.username, email: infoSignIn.email }, { path: "/", expires: d });
        setCookie("access_token", infoSignIn.token, { path: "/", expires: d });
        setCookie("roles", infoSignIn.roles, { path: "/", expires: d });
        setIsLoading(false);
        if (infoSignIn.roles.includes('ROLE_ADMIN') || infoSignIn.roles.includes('ROLE_MOD')) {
          navigate("/admin");
        } else {
          navigate("/invest");
        }
      } else {
        setShowDialog(true);
        setIsLoading(false);
      }
    } catch (error) {
      setShowDialog(true);
      setIsLoading(false);
      console.error(error);
    }
  }

  async function getData() {
    setIsLoading(true);
    const article = await getArticleAll();
    setArticleList(article);
    setIsLoading(false);
  }

  useEffect(() => {
    getData();
    if (cookie.access_token && (location.pathname == "/" || location.pathname == "/login")) {
      if (cookie.roles.includes("ROLE_ADMIN") || cookie.roles.includes("ROLE_MOD")) navigate("/admin");
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
          <div className="rounded-2xl bg-white shadow-2xl h-1/3 flex flex-col items-center justify-center">
            <div className="flex items-center justify-center text-3xl font-semibold text-gray-900">Đăng nhập</div>
            <form className="px-12 w-full" id="userForm">
              <div>
                <InputWithLabel
                  label="Tên đăng nhập"
                  placeholder="Vui lòng điền Email/Phone"
                  type="text" id="usrNm"
                  require
                  handleChange={(e) => handleChangeUsrNm(e)}
                />
                <div className="h-5"></div>
                <InputWithLabel
                  label="Mật khẩu"
                  placeholder="Vui lòng điền mật khẩu"
                  type={showPassword ? 'text' : 'password'} id="usrPwd"
                  require
                  handleChange={(e) => handleChangePwd(e)}
                  handleClickShowPassword={handleClickShowPassword}
                  handleKeyEnter={handleSubmitLogin}
                />
              </div>
              <div className="mt-5 flex items-center">
                <div className="w-7/12 text-end">
                  <Button type="button" variant="default" onClick={handleSubmitLogin}>Đăng nhập</Button>
                </div>
                <div className="w-5/12 text-end">
                  <span onClick={() => setShowRegister(true)} className="font-semibold text-blue-500 hover:text-blue-300 underline cursor-pointer">Đăng ký tài khoản</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {showRegister && <Register setMessageDialog={setMessageDialog} setStatusDialog={setStatusDialog} setShowModal={setShowModal} handleClickRegister={handleClickRegister} />}
      {showDialog && <Modal handleClickModal={handleClickDialog} message={"Invalid login Username or Password."} status="Error" />}
      {showModal && <Modal handleClickModal={handleClickModal} message={messageDialog} status={statusDialog} />}
    </div>
  );
}

export default Login;