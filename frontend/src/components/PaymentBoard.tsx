import {currency} from "../lib/utils";
import {useEffect, useState} from "react";
import {Payment} from "../models";

export const PaymentBoard = (props: { className?: string, paymentInfo: Payment }) => {

  const [paymentInfo, setPaymentInfo] = useState(new Payment())

  useEffect(() => {
    setPaymentInfo(props.paymentInfo)
  })

  return (
    <div className={`${props.className} payment-board`}>
      <div className="payment-info bg-white px-6 py-2 rounded-lg w-full">
        <div className="flex items-center gap-4 mb-2">
          <p className="text-md font-bold">Thông tin thanh toán:</p>
          <span className="text-xl font-bold">VietstockFinance Standard</span>
        </div>
        <p className="mb-3">Chi tiết đơn hàng:</p>
        <div className="bg-gray-100 rounded-3xl">
          <div className="px-4 pt-4">
            <div className="mb-2">
              <div className="flex justify-between">
                <div className="font-bold">Phí dịch vụ</div>
                <div className="font-bold">{currency(paymentInfo.fee)} / {paymentInfo.unit}</div>
              </div>
              <hr className="my-2"/>
              <div className="flex justify-between">
                <div>Giảm giá dịch vụ</div>
                <div>-{currency(paymentInfo.discountFee)} / {paymentInfo.unit}</div>
              </div>
              <div className="flex justify-between">
                <span>Voucher giảm giá</span>
                <span></span>
              </div>
              <hr className="my-2"/>
              <div className="flex justify-between">
                <div>Tiết kiệm</div>
                <div className="text-red-500">-{currency(paymentInfo.saveFee)} / {paymentInfo.unit}</div>
              </div>
            </div>
          </div>
          <hr className="border border-t-gray-400"/>
          <div className="flex justify-between p-4 font-bold text-lg mb-4">
            <div>Thanh toán</div>
            <div>{currency(paymentInfo.saveFee)} / {paymentInfo.unit}</div>
          </div>
        </div>
        <div className="flex items-center mt-4 bg-gray-100 rounded-full py-2">
          <div className="ml-4">
            <input type="radio" defaultChecked={true}/>
          </div>
          <img width={150}
               alt="VNPay"
               src="https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/3bbe833530e81bef195550134ac11adea982a1a0"
               loading="lazy"
               draggable="false"/>
          <p className="text-sm">
            Gói sản phẩm sẽ được tự động kích hoạt ngay khi thanh toán thành công
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="w-1/2 flex items-center mt-4 gap-4 bg-white px-4">
          <div className="flex items-center mb-4">
            <input className="mr-2" id="not-robot" type="checkbox"/>
            <label className="text-sm" htmlFor="not-robot">
              Tôi không phải là người máy
            </label>
          </div>
          <div className="my-2">
            <button className="bg-blue-500 text-white py-1 px-2 rounded-full w-[150px]">
              THANH TOÁN
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
