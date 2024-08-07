import { getStockAll } from "@/api/stock";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../common/Loader";

function ListCompany() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      let result = await getStockAll();
      setCategories(result);
      setIsLoading(false);
    }
    getData();
  }, [])

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="flex justify-center">
      <div className="container">
        <div className="pt-8 text-center">
          <h1 className="text-4xl font-semibold">Danh mục</h1>
        </div>
        <div className="flex flex-col items-center w-full px-8 py-8 gap-y-8">
          {categories.map(e =>
            <div key={e.id} className="flex justify-between w-[1200px] px-4 py-4 border rounded-lg">
              <div className="flex items-center">
                <div className="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="59" fill="none" viewBox="0 0 25 24" id="affinity-designer"><rect width="24" height="24" x=".463" fill="url(#paint0_linear_302_4600)" rx="8"></rect><path fill="#fff" fillRule="evenodd" d="M13.87 4H11.2727L4 16.3636V19.6364C4 19.8372 4.16281 20 4.36364 20H11.1903L8.10538 14.1729L13.87 4ZM12.4247 20H19.6364C19.8372 20 20 19.8372 20 19.6364V14.7273H9.63323L12.4247 20ZM20 13.6364V4.36364C20 4.16281 19.8372 4 19.6364 4H15.1239L11.865 9.751L14.1315 13.6364H20ZM11.2427 10.8492L12.8685 13.6364H9.66331L11.2427 10.8492Z" clipRule="evenodd"></path><defs><linearGradient id="paint0_linear_302_4600" x1=".463" x2="24.463" y1="12" y2="12" gradientUnits="userSpaceOnUse"><stop stopColor="#ED6D6B"></stop><stop offset="1" stopColor="#F0B076"></stop></linearGradient></defs></svg>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">{e.symbol}</h4>
                  <p>{e.companyName}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Link to={`/detail?stoke=${e.symbol}`} className="px-4 py-2 border rounded-full bg-blue-500">
                  <span className="text-white font-semibold">Detail</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ListCompany;