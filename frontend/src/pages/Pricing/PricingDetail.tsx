import {getUserDetail} from '@/api/user';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {useEffect, useState} from 'react';
import {useCookies} from 'react-cookie';
import {Input} from '../../components/ui/input';
import {Label} from '../../components/ui/label';
import {COOKIE,} from "../../config/config";
import {Payment, Price, User} from "../../models";
import {useParams} from "react-router-dom";
import {PaymentBoard} from "../../components/PaymentBoard";
import {ReCaptcha} from "../../components/ReCaptcha";

export const PricingDetail = () => {

  const mock = new Payment({
    fee: 1230000,
    unit: '3 tháng',
    discountFee: 123000,
    saveFee: 123000,
    amount: 123000,
  },)
  const cookies = useCookies([COOKIE.USER_ID]);
  const [userInfo, setUserInfo] = useState(new User());
  const [priceInfo, setPriceInfo] = useState(mock);
  const {id: priceId} = useParams();

  useEffect(() => {
    getUserInfo();
    // getPricingInfo();

    setTimeout(() => {
      mock.fee = 1231120000
    }, 3000)
  }, []);

  /**
   * get user info
   */
  const getUserInfo = async () => {
    const id = cookies[0].usrId.id;
    const res = await getUserDetail(id);

    if (res) {
      setUserInfo(new User(res));
    }
  }

  return (
    <div className="payment-page">
      <div className="container mt-8 mx-auto flex-1 md:flex justify-between gap-2 md:gap-6">
        {/* user info */}
        <div className="user-info max-h-[420px] sm:w-full md:max-w-[300px] lg:max-w-[420px]">
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="uppercase text-center text-2xl">Thông tin hội viên</CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent className="mb-8">
              <div className="mt-2 w-full max-w-md items-center">
                <Label htmlFor="account">Tài khoản</Label>
                <Input defaultValue={userInfo?.username ?? ''} disabled type="text" id="account"/>
              </div>
              <div className="mt-2 w-full max-w-md items-center">
                <Label htmlFor="name">Họ và tên</Label>
                <Input defaultValue={(userInfo?.firstName + userInfo?.lastName || '') ?? ''}
                       type="text"
                       id="name"/>
              </div>
              <div className="mt-2 w-full max-w-md flex gap-x-4">
                <div className="w-1/2">
                  <Label htmlFor="email">Địa chỉ email</Label>
                  <Input defaultValue={userInfo?.email ?? ''} disabled type="text" id="email"/>
                </div>
                <div className="w-1/2">
                  <Label htmlFor="phone">Điện thoại</Label>
                  <Input defaultValue={userInfo?.phoneNumber ?? ''} type="text" id="phone"/>
                </div>
              </div>
              <div className="mt-2 w-full max-w-md items-center">
                <Label htmlFor="address">Địa chỉ liên hệ</Label>
                <Input defaultValue={''} type="text" id="address"/>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* payment info */}
        <div className="payment-info flex flex-col flex-1 max-h-[600px]">
          {/* voucher */}
          {/*<VoucherInput></VoucherInput>*/}

          {/* payment board */}
          <PaymentBoard paymentInfo={mock}></PaymentBoard>

          <div className="mt-8 bg-white px-6 py-2 rounded-lg w-full">
            <ReCaptcha onChanged={(e) => console.log(e)} />
          </div>
        </div>
      </div>
    </div>
  );
}
