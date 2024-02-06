import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="h-[100vh] flex flex-col justify-center items-center bg-white">
      <div>
        <span className="text-gray-900 text-8xl font-semibold">404 Không tìm thấy trang!</span>
      </div>
      <Link to="/invest" className="mt-10 text-blue-500 text-2xl font-semibold underline">Di chuyển tới Trang chủ</Link>
    </div>
  );
}

export default NotFound;