import { updateProduct } from "@/api/product";
import Modal from "@/components/common/Modal";
import ProductTemplate from "@/components/common/ProductTemplate";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ProductItem } from "@/store/product";
import { useState } from "react";
import { useRecoilState } from "recoil";

function ProductUpdate(props) {
  const [product, setProduct] = useRecoilState(ProductItem);

  const [showModal, setShowModal] = useState(false);
  const [infoDialog, setInfoDialog] = useState({
    status: "",
    message: ""
  });

  const handleSaveProduct = async () => {
    let response = await updateProduct(props.id, product[0]);
    if (response) {
      setInfoDialog(prev => ({ ...prev, status: "Success", message: "Update successfully!" }));
      setShowModal(true);
    } else {
      setInfoDialog(prev => ({ ...prev, status: "Error", message: "Update fail!" }));
      setShowModal(true);
    }
  }

  const handleCloseAll = () => {
    setShowModal(false);
    document.getElementById('product-update')?.click();
    props.getData();
  }

  return (
    <div className="container mx-auto flex flex-col mt-10">
      <div className="flex justify-center">
        <div className="w-[600px]">
          <div className="w-full flex flex-col">
            <Input defaultValue={product[0].name} onInput={(e) => setProduct(prev => ([{ ...prev[0], name: e.target.value }]))} placeholder="Tên sản phẩm" />
            <Input defaultValue={product[0].minimumBudget} onInput={(e) => setProduct(prev => ([{ ...prev[0], minimumBudget: e.target.value }]))} className="mt-6" placeholder="Tối thiểu" />
            <Input defaultValue={product[0].commitmentTime} onInput={(e) => setProduct(prev => ([{ ...prev[0], commitmentTime: e.target.value }]))} className="mt-6" placeholder="Thời gian" />
            <Input defaultValue={product[0].bonus} onInput={(e) => setProduct(prev => ([{ ...prev[0], bonus: e.target.value }]))} className="mt-6" placeholder="Thưởng" />
            <Input defaultValue={product[0].navFee} onInput={(e) => setProduct(prev => ([{ ...prev[0], navFee: e.target.value }]))} className="mt-6" placeholder="Phí" />
            <Input defaultValue={product[0].profitRateCommitment} onInput={(e) => setProduct(prev => ([{ ...prev[0], profitRateCommitment: e.target.value }]))} className="mt-6" placeholder="Tỷ lệ lợi nhuận cam kết" />
            <Input defaultValue={product[0].acountFeeForWebsite} onInput={(e) => setProduct(prev => ([{ ...prev[0], acountFeeForWebsite: e.target.value }]))} className="mt-6" placeholder="Tài khoản miễn phí cho website" />
            <Textarea defaultValue={product[0].description} onInput={(e) => setProduct(prev => ([{ ...prev[0], description: e.target.value }]))} className="mt-6 bg-white h-[100px]" placeholder="Mô tả" />
          </div>
          <div className="text-end">
            <Button variant="primary" onClick={handleSaveProduct} className="mt-8 w-[120px]" type="button">Save</Button>
          </div>
        </div>
        <div className="ml-40 w-[500px]">
          <ProductTemplate handleClickBuy={() => { }} />
        </div>
      </div>
      {showModal && <Modal handleClickModal={handleCloseAll} message={infoDialog.message} status={infoDialog.status} />}
    </div>
  );
}

export default ProductUpdate;
