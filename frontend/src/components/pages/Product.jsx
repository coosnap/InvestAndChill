import Loader from "../common/Loader";
import { useEffect, useState } from "react";
import { getProductAll } from "@/api/product";
import { useNavigate } from "react-router-dom/dist";
import ProductTemplate from "../common/ProductTemplate";

function Product() {
  const navigate = useNavigate();
  const [products, setProducts] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  function handleClickBuy(id) {
    navigate(`/buy/${id}`);
  }

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
        <ProductTemplate cls="w-1/4" products={products} handleClickBuy={handleClickBuy} />
      </div>
    </div>
  );
}

export default Product;