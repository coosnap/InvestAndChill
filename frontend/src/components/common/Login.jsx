import { useNavigate } from "react-router-dom";
import Dialog from "./ModalDialog";
import { useState } from "react";
import { useCookies } from "react-cookie";

const news = [
  { id: '1', title: 'Chứng khoán VIX không còn là cổ đông lớn của HJS' },
  { id: '2', title: 'Những doanh nghiệp thực hiện chiến lược “nông nghiệp bền vững”, đón đầu dòng vốn xanh' },
  { id: '3', title: 'Nếu được nâng hạng, 3-4 tỷ USD sẽ chảy vào chứng khoán Việt Nam' },
  { id: '4', title: 'Sở Giao dịch Chứng khoán Việt Nam lãi gần 1,900 tỷ đồng năm 2023' },
]

function Login() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [cookies, setCookies] = useCookies(['usrId']);

  const handleClickDialog = () => setShowModal(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const handleSubmitLogin = (event) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      let object = {};
      formData.forEach((value, key) => (object[key] = value));

      if (object.usrNm === 'admin' && object.usrPwd === 'admin') {
        let d = new Date();
        d.setTime(d.getTime() + (d.getMinutes() * 60 * 1000));
        setCookies("usrId", { id: '1', usrNm: 'admin' }, { path: "/", expires: d });
        navigate('/invest');
      } else {
        setShowModal(true);
      }
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-white">
      <div className="container h-[100vh] py-10 flex gap-8">
        <div className="flex flex-col w-1/2 h-full gap-8">
          <div className="rounded-2xl bg-white h-2/3 flex flex-col justify-center pl-12">
            <h1 className="text-7xl text-gray-900 mb-5">Tiết kiệm thời gian</h1>
            <h4 className="text-3xl text-gray-900 mb-4">Tiếp cận hệ thống dữ liệu tài chính</h4>
            <p className="text-xl text-gray-900">Chính xác - Cập nhật - Đầy đủ</p>
          </div>
          <div className="rounded-2xl bg-white h-1/3 flex flex-col justify-center px-12">
            {news.map(e =>
              <span className="text-gray-900 mb-3 cursor-pointer border-b pb-1" key={e.id}>{e.title}</span>
            )}
          </div>
        </div>

        <div className="flex flex-col w-1/2 h-full gap-8">
          <div className="rounded-2xl bg-white shadow-2xl h-2/3 flex flex-col items-center justify-center">
            <div className="pt-4 flex items-center justify-center text-4xl font-semibold text-gray-900">Login</div>
            <form className="p-12 w-full" id="userForm" onSubmit={handleSubmitLogin}>
              <div>
                <div className="flex flex-col">
                  <label after=" *" class="after:content-[attr(after)] after:text-red-600 font-semibold text-gray-900">Username</label>
                  <input
                    type="text"
                    placeholder="Enter your Email/Phone"
                    name='usrNm'
                    id='usrNm'
                    className="mt-2 input input-bordered bg-white text-gray-900 w-full" />
                </div>
                <div className="flex flex-col mt-3">
                  <label after=" *" class="after:content-[attr(after)] after:text-red-600 font-semibold text-gray-900">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter your password"
                      name='usrPwd'
                      id='usrPwd'
                      className="mt-2 input input-bordered bg-white text-gray-900 w-full" />
                    <div className="absolute top-1/3 right-3">
                      {showPassword ?
                        <button type="button" onClick={handleClickShowPassword}>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                          </svg>
                        </button>
                        :
                        <button type="button" onClick={handleClickShowPassword}>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                          </svg>
                        </button>
                      }
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-end">
                <span className="font-semibold text-blue-500 underline">Đăng ký tài khoản</span>
              </div>
              <div className="text-center mt-4">
                <button type="submit" className="px-10 py-3 rounded-full bg-blue-600">
                  <span className="font-semibold text-white">Login</span>
                </button>
              </div>
            </form>
          </div>
          <div className="rounded-2xl bg-white h-1/3"></div>
        </div>
      </div>
      {showModal && <Dialog handleClickDialog={handleClickDialog} />}
    </div>
  );
}

export default Login;