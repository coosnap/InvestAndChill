import { useState } from "react";
import { signUp } from "../../api/auth";

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
    console.log('reponse', reponse)
    if (response) {
      props.setShowModal(true);
      props.setMessageDialog(response.message);
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
            <div>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Username</span>
                </div>
                <input onChange={handleChangeName} type="text" placeholder="Vui lòng điền Username!" className="input input-bordered w-full" />
              </label>
            </div>
            <div className="">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Email</span>
                </div>
                <input onChange={handleChangeEmail} type="text" placeholder="Vui lòng điền Email!" className="input input-bordered w-full" />
              </label>
            </div>
            <div>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Mật khẩu</span>
                </div>
                <input onChange={handleChangePassword} type="text" placeholder="Vui lòng điền mật khẩu!" className="input input-bordered w-full" />
              </label>
            </div>
            <div className="pt-4 text-center">
              <button onClick={handleSubmitRegister} className="btn btn-primary text-white">Đăng ký</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;