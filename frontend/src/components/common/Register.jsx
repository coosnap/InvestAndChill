import { useState } from "react";
import { signUp } from "../../api/auth";
import { InputWithLabel } from "./InputWithLabel";
import { Button } from "../ui/button";

function Register(props) {
  const [register, setRegister] = useState({});

  const handleCloseRegister = () => props.handleClickRegister();

  function handleChangeName(e) {
    setRegister({ ...register, username: e.target.value });
  }
  function handleChangeEmail(e) {
    setRegister({ ...register, email: e.target.value });
  }
  function handleChangePassword(e) {
    setRegister({ ...register, password: e.target.value });
  }

  async function handleSubmitRegister() {
    const response = await signUp(register);
    const responseBody = await response.json();
    if (response.ok) {
      setStatusDialog("Success");
      props.setShowModal(true);
      props.setMessageDialog(responseBody.message);
    } else {
      setStatusDialog("Error");
      props.setShowModal(true);
      props.setMessageDialog(responseBody.message);
    }
  }

  return (
    <div className="relative z-8" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <div className="relative overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg px-8 py-4">
            <button onClick={handleCloseRegister} className="btn btn-sm btn-circle btn-ghost text-black absolute right-2 top-2 focus:border-none">✕</button>
            <h3 className="font-bold text-xl text-center text-black mb-4">Đăng ký tài khoản</h3>
            <InputWithLabel label="Tên đăng nhập" placeholder="Vui lòng điền Username!" type="text" id="usrNmRe" require handleChange={handleChangeName} />
            <div className="h-5"></div>
            <InputWithLabel label="Email" placeholder="Vui lòng điền Email!" type="text" id="emailRe" require handleChange={handleChangeEmail} />
            <div className="h-5"></div>
            <InputWithLabel label="Mật khẩu" placeholder="Vui lòng điền Mật khẩu!" type="text" id="usrPwRe" require handleChange={handleChangePassword} />
            <div className="pt-4 text-center">
              <Button type="button" variant="default" onClick={handleSubmitRegister}>Đăng ký</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;