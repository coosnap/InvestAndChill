import { FaCheck } from "react-icons/fa";
import Loader from "../common/Loader";
import { useEffect, useState } from "react";
import { getProductAll } from "@/api/product";

function Product() {
  const [products, setProducts] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  async function getData() {
    setIsLoading(true);
    const result = await getProductAll();
    setProducts(result);
    setIsLoading(false);
  }

  useEffect(() => {
    getData();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="flex justify-center bg-[#EBEDF4]">
      <div className="container h-[calc(100vh-66px)] pt-10">
        <div className="text-center mb-12">
          <h2 className="text-[#232A46] font-semibold text-4xl">Các gói dịch vụ</h2>
        </div>
        <div className="gap-6 flex">
          {products.map((e) =>
            <div key={e.id} className="w-1/4 h-full bg-white rounded-lg flex flex-col items-center gap-y-8 py-4 px-2">
              <h1 className="text-4xl text-center text-[rgb(84, 91, 102)] font-semibold">{e.name}</h1>
              <h2 className="text-center text-2xl font-semibold text-[#098DFE]">Tối thiểu: {e.minimumBudget.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</h2>
              <h3>Thời gian: {e.commitmentTime} tháng</h3>
              <p className="text-lg text-center text-red-600">Thưởng: {e.bonus}</p>
              <p className="text-md text-center text-gray-900">Phí: {e.navFee}</p>
              <p className="text-md text-center text-grey-500">Tỷ lệ lợi nhuận cam kết: {e.navFee}%</p>
              <p className="ml-2 text-sx text-black text-center">{e.description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Product;