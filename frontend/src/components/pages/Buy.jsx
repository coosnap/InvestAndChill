import { getUserDetail } from '@/api/user';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

export default function Buy() {
  const cookies = useCookies(['usrId']);
  const [userInfo, setUserInfo] = useState({});

  async function getData() {
    const id = cookies[0].usrId.id;
    const result = await getUserDetail(id);
    if (result) setUserInfo(result);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="mt-8 flex justify-between gap-60">
      <Card className="bg-white ml-8 max-h-[420px] min-w-[420px]">
        <CardHeader>
          <CardTitle className="uppercase text-center text-2xl">Thông tin hội viên</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent className="mb-8">
          <div className="mt-2 w-full max-w-md items-center">
            <Label htmlFor="account">Tài khoản</Label>
            <Input defaultValue={userInfo?.username ?? ''} disabled type="text" id="account" />
          </div>
          <div className="mt-2 w-full max-w-md items-center">
            <Label htmlFor="name">Họ và tên</Label>
            <Input
              defaultValue={(userInfo?.firstName + userInfo?.lastName || '') ?? ''}
              type="text"
              id="name"
            />
          </div>
          <div className="mt-2 w-full max-w-md flex gap-x-4">
            <div className="w-1/2">
              <Label htmlFor="email">Địa chỉ email</Label>
              <Input defaultValue={userInfo?.email ?? ''} disabled type="text" id="email" />
            </div>
            <div className="w-1/2">
              <Label htmlFor="phone">Điện thoại</Label>
              <Input defaultValue={userInfo?.phoneNumber ?? ''} type="text" id="phone" />
            </div>
          </div>
          <div className="mt-2 w-full max-w-md items-center">
            <Label htmlFor="address">Địa chỉ liên hệ</Label>
            <Input defaultValue={''} type="text" id="address" />
          </div>
        </CardContent>
      </Card>
      <div className="flex flex-col flex-1 gap-4 mr-28 max-h-[600px]">
        <div class="bg-white px-6 py-3 rounded-lg w-full">
          <div class="flex items-center gap-4">
            <span>Mã voucher</span>
            <div class="flex flex-1 items-center justify-between bg-white rounded-full border border-gray-400">
              <input
                type="text"
                placeholder="Mã voucher"
                class="px-4 py-2 rounded-full placeholder:italic"
              />
              <button class="w-[140px] bg-blue-500 text-white px-4 py-2 rounded-full">
                Áp dụng
              </button>
            </div>
          </div>
        </div>
        <div class="bg-white px-6 py-2 rounded-lg w-full">
          <div className="flex items-center gap-4 mb-2">
            <p class="text-md font-bold">Thông tin thanh toán</p>
            <span class="text-xl font-bold">VietstockFinance Standard</span>
          </div>
          <p class="mb-3">Chi tiết đơn hàng:</p>
          <div className="bg-gray-100 rounded-3xl">
            <div class="px-4 pt-4">
              <div class="mb-2">
                <div class="flex justify-between">
                  <span className="font-bold">Phí dịch vụ</span>
                  <span className="font-bold">447,000 đồng/3 tháng</span>
                </div>
                <hr className="my-2" />
                <div class="flex justify-between">
                  <span>Giảm giá dịch vụ</span>
                  <span>- 178,800 đồng/3 tháng</span>
                </div>
                <div class="flex justify-between">
                  <span>Voucher giảm giá</span>
                  <span></span>
                </div>
                <hr className="my-2" />
                <div class="flex justify-between">
                  <span>Tiết kiệm</span>
                  <span className="text-red-500">- 178,800 đồng/3 tháng</span>
                </div>
              </div>
            </div>
            <hr className="border border-t-gray-400" />
            <div className="flex justify-between p-4 font-bold text-lg mb-4">
              <span>Thanh toán</span>
              <span>268,200 đồng/3 tháng</span>
            </div>
          </div>
          <div className="flex items-center mt-4 bg-gray-100 rounded-full py-2">
            <div className="ml-4">
              <input type="radio" checked />
            </div>
            <img
              width={150}
              alt="Vntaxi CJ preview"
              src="https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/3bbe833530e81bef195550134ac11adea982a1a0"
              loading="lazy"
              draggable="false"
            ></img>
            <p className="text-sm">
              Gói sản phẩm sẽ được tự động kích hoạt ngay khi thanh toán thành công
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-1/2 flex items-center mt-4 gap-4 bg-white px-4">
            <div className="flex items-center mb-4">
              <input className="mr-2" id="not-robot" type="checkbox" />
              <label className="text-sm" for="not-robot">
                Tôi không phải là người máy
              </label>
            </div>
            <div className="my-2">
              <button className="bg-blue-500 text-white py-1 px-2 rounded-full w-[150px]">
                <span>THANH TOÁN</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
