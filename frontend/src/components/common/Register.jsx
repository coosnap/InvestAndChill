import { useState } from "react";
import { signUp } from "../../api/auth";
import { InputWithLabel } from "./InputWithLabel";
import { Button } from "../ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

function Register(props) {
  const [register, setRegister] = useState({});

  async function handleSubmitRegister() {
    const response = await signUp(register);
    if (response.ok) {
      const responseBody = await response.json();
      if (responseBody.message) {
        props.setStatusDialog("Success");
        props.setShowModal(true);
        props.setMessageDialog(responseBody.message);
      }
    } else {
      props.setStatusDialog("Error");
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
            <button onClick={() => props.handleClickRegister()} className="btn btn-sm btn-circle btn-ghost text-black absolute right-2 top-2 focus:border-none">✕</button>
            <p className="font-bold text-xl text-center text-black mb-4">Đăng ký tài khoản</p>
            <InputWithLabel label="Tên đăng nhập" placeholder="Vui lòng điền Username!" type="text" id="usrNmRe" require handleChange={() => setRegister({ ...register, username: e.target.value })} />
            <div className="h-5"></div>
            <InputWithLabel label="Email" placeholder="Vui lòng điền Email!" type="text" id="emailRe" require handleChange={() => setRegister({ ...register, email: e.target.value })} />
            <div className="h-5"></div>
            <InputWithLabel label="Mật khẩu" placeholder="Vui lòng điền Mật khẩu!" type="text" id="usrPwRe" require handleChange={() => setRegister({ ...register, password: e.target.value })} />
            <div className="pt-4 text-center">
              <Button onClick={handleSubmitRegister}>Đăng ký</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;