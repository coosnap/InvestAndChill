import { getProductAll } from '@/api/product';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom/dist';
import Loader from '../common/Loader';
import ProductTemplate from '../common/ProductTemplate';

function Product() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
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
    <div className="h-full flex justify-center">
      <div className="container w-[80%] py-6">
        <div className="text-center mb-8">
          <h2 className="text-[#232A46] font-semibold text-4xl">Các gói dịch vụ</h2>
        </div>
        <ProductTemplate cls="w-1/4" products={products} handleClickBuy={handleClickBuy} />
      </div>
    </div>
  );
}

export default Product;
