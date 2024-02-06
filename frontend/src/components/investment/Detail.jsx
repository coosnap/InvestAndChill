import { Link } from "react-router-dom";

function Detail() {
  return (
    <div className="h-[100vh] bg-white flex justify-center items-center gap-8">
      <Link to="#" className="w-1/4 h-1/2 flex justify-center items-center border rounded-lg shadow-xl">
        Phân tích Cơ bản Doanh nghiệp
      </Link>
      <Link to="#" className="w-1/4 h-1/2 flex justify-center items-center border rounded-lg shadow-xl">
        Phân tích Kỹ thuật Giao dịch
      </Link>
    </div>
  );
}

export default Detail;