import { useCookies } from "react-cookie";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useState } from "react";
import { useEffect } from "react";
import { getUserDetail } from "@/api/user";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Buy() {
  const cookies = useCookies(['usrId']);
  const [userInfo, setUserInfo] = useState({});

  async function getData() {
    const id = cookies[0].usrId.id;
    const result = await getUserDetail(id);
    console.log(result)
    if (result) setUserInfo(result);
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className="flex justify-center">
      <div className="container mt-8 flex flex-col">
        <Card className="w-[30%] bg-white">
          <CardHeader>
            <CardTitle className="uppercase text-center text-2xl">Thông tin hội viên</CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent className="mb-8">
            <div className="mt-2 w-full max-w-md items-center">
              <Label htmlFor="account">Tài khoản</Label>
              <Input defaultValue={userInfo?.username ?? ""} disabled type="text" id="account" />
            </div>
            <div className="mt-2 w-full max-w-md items-center">
              <Label htmlFor="name">Họ và tên</Label>
              <Input defaultValue={((userInfo?.firstName + userInfo?.lastName) || "") ?? ""} type="text" id="name" />
            </div>
            <div className="mt-2 w-full max-w-md flex gap-x-4">
              <div className="w-1/2">
                <Label htmlFor="email">Địa chỉ email</Label>
                <Input defaultValue={userInfo?.email ?? ""} disabled type="text" id="email" />
              </div>
              <div className="w-1/2">
                <Label htmlFor="phone">Điện thoại</Label>
                <Input defaultValue={userInfo?.phoneNumber ?? ""} type="text" id="phone" />
              </div>
            </div>
            <div className="mt-2 w-full max-w-md items-center">
              <Label htmlFor="address">Địa chỉ liên hệ</Label>
              <Input defaultValue={""} type="text" id="address" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};