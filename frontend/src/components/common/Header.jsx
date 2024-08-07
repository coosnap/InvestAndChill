import { getUserDetail, updateUser } from "@/api/user";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTrigger
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { FcReading } from "react-icons/fc";
import { Link } from "react-router-dom";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import Modal from "./Modal";

function Header() {
  const [cookies, setCookie] = useCookies(['access_token', 'usrId']);

  const [userInfo, setUserInfo] = useState({});
  const [passwordInfo, setPasswordInfo] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [showPop, setShowPop] = useState(false);
  const [messageDialog, setMessageDialog] = useState({ status: "", message: "" });
  const [tabDefault, setTabDefault] = useState("user");

  function handlSignOut() {
    setCookie("access_token", "", {});
    setCookie("usrId", "", {});
    setCookie("roles", "", {});
    window.location.href = "/login";
  }

  async function handleUpdateUser() {
    const id = cookies.usrId.id;
    try {
      const result = await getUserDetail(id);
      setUserInfo(result);
    } catch (error) {
      setUserInfo({});
    }
  }

  async function handleClickSaveUser() {
    try {
      let responseBody = await updateUser(userInfo);
      if (responseBody) {
        setShowPop(false);
        setMessageDialog(prev => ({ ...prev, status: "Success", message: "Update Successfully!" }));
        setShowModal(true);
        document.getElementById('user-info-cancel')?.click();
      }
    } catch (error) {
      setShowPop(false);
      setMessageDialog(prev => ({ ...prev, status: "Error", message: "Update Fail!" }));
      setShowModal(true);
    }
  }

  useEffect(() => {
    if (!cookies?.usrId?.usrNm) window.location.href = "/login";
  }, [])

  const onTabChange = (value) => {
    setTabDefault(value);
  }

  return (
    <div className="navbar flex justify-between items-center bg-blue-100 py-2 px-8">
      <div className="flex">
        <Link to="/invest" className="flex items-center text-3xl tracking-tighter font-semibold text-[#DA5800]">
          <img src="/logo.jpg" width={48} height={48} /><span className="ml-3">Invest Chill</span>
        </Link>
      </div>
      <Popover open={showPop} onOpenChange={setShowPop}>
        <PopoverTrigger asChild>
          <button>
            <FcReading className="w-[40px] h-[40px] border border-orange-500 rounded-full p-1" />
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-80 bg-white">
          <div className="grid gap-4">
            <div className="space-y-2 text-center">
              <h4 className="font-semibold text-2xl">{cookies?.usrId?.usrNm ?? ""}</h4>
              <p className="text-xl text-muted-foreground">
                {cookies?.usrId?.email ?? ""}
              </p>
            </div>
            {(cookies?.roles?.includes("ROLE_MODERATOR_USER") || cookies?.roles?.includes("ROLE_ADMIN")) &&
              <Link to="/admin">Đi tới Admin</Link>
            }
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <button className="text-lg text-start" onClick={handleUpdateUser}>
                  Cập nhật thông tin
                </button>
              </AlertDialogTrigger>
              <AlertDialogContent className="h-[550px]">
                <div>
                  <Tabs value={tabDefault} onValueChange={onTabChange} className="w-full">
                    <TabsList className="flex flex-col items-start h-full pt-8 pb-4 px-4 border-none">
                      <div className="w-full mb-6 border p-2 rounded-lg">
                        <TabsTrigger className="w-1/2" value="user">Thông tin người dùng</TabsTrigger>
                        <TabsTrigger className="w-1/2" value="password">Mật khẩu</TabsTrigger>
                      </div>

                      <TabsContent value="user" className="flex w-full">
                        <div className="flex flex-col gap-3 w-full">
                          <div className="flex">
                            <div className="space-y-1 w-1/2 pr-2">
                              <Label htmlFor="phoneNumber">Phone Number</Label>
                              <Input
                                id="phoneNumber"
                                defaultValue={userInfo?.phoneNumber ?? ""}
                                onChange={(e) => {
                                  setUserInfo((prev) => ({
                                    ...prev,
                                    phoneNumber: e.target.value,
                                  }));
                                }} />
                            </div>
                            <div className="space-y-1 w-1/2 pl-2">
                              <Label htmlFor="username">User Name</Label>
                              <Input
                                id="username"
                                defaultValue={userInfo?.username ?? ""}
                                onChange={(e) => {
                                  setUserInfo((prev) => ({
                                    ...prev,
                                    username: e.target.value,
                                  }));
                                }} />
                            </div>
                          </div>
                          <div className="flex">
                            <div className="space-y-1 w-1/2 pr-2">
                              <Label htmlFor="firstname">First Name</Label>
                              <Input
                                id="firstname"
                                defaultValue={userInfo?.firstName ?? ""}
                                onChange={(e) => {
                                  setUserInfo((prev) => ({
                                    ...prev,
                                    firstName: e.target.value,
                                  }));
                                }} />
                            </div>
                            <div className="space-y-1 w-1/2 pl-2">
                              <Label htmlFor="lastname">Last Name</Label>
                              <Input
                                id="lastname"
                                defaultValue={userInfo?.lastName ?? ""}
                                onChange={(e) => {
                                  setUserInfo((prev) => ({
                                    ...prev,
                                    lastName: e.target.value,
                                  }));
                                }} />
                            </div>
                          </div>
                          <span className="space-y-1">
                            <Label htmlFor="email">Email</Label>
                            <Input
                              id="email"
                              defaultValue={userInfo?.email ?? ""}
                              onChange={(e) => {
                                setUserInfo((prev) => ({
                                  ...prev,
                                  email: e.target.value,
                                }));
                              }} />
                          </span>
                          <div className="space-y-1 w-full">
                            <Label htmlFor="password">Password</Label>
                            <Input
                              id="password"
                              defaultValue={userInfo?.password ?? ""}
                              placeholder="Vui lòng nhập mật khẩu xác nhận"
                              onChange={(e) => {
                                setUserInfo((prev) => ({
                                  ...prev,
                                  password: e.target.value,
                                }));
                              }} />
                          </div>
                        </div>
                      </TabsContent>
                      <TabsContent value="password" className="flex flex-col w-full">
                        <div className="w-full">
                          <Label htmlFor="password">Mật khẩu cũ</Label>
                          <Input
                            id="password"
                            defaultValue={""}
                            placeholder="Vui lòng nhập mật khẩu"
                            onChange={(e) => {
                              setPasswordInfo((prev) => ({
                                ...prev,
                                password: e.target.value,
                              }));
                            }} />
                        </div>
                        <div className="h-5"></div>
                        <div className="w-full">
                          <Label htmlFor="password">Mật khẩu mới</Label>
                          <Input
                            id="password"
                            defaultValue={""}
                            placeholder="Vui lòng nhập mật khẩu mới"
                            onChange={(e) => {
                              setPasswordInfo((prev) => ({
                                ...prev,
                                passwordNew: e.target.value,
                              }));
                            }} />
                        </div>
                        <div className="h-5"></div>
                        <div className="w-full">
                          <Label htmlFor="password">Nhập lại mật khẩu</Label>
                          <Input
                            id="password"
                            defaultValue={""}
                            placeholder="Vui lòng nhập mật khẩu xác nhận"
                            onChange={(e) => {
                              setPasswordInfo((prev) => ({
                                ...prev,
                                passwordCon: e.target.value,
                              }));
                            }} />
                        </div>
                      </TabsContent>
                    </TabsList>
                  </Tabs>
                </div>
                <AlertDialogFooter>
                  <AlertDialogCancel id="user-info-cancel">Cancel</AlertDialogCancel>
                  <Button variant="primary" onClick={handleClickSaveUser}>
                    Save
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
            <Button variant="primary" onClick={handlSignOut}>Logout</Button>
          </div>
        </PopoverContent>
      </Popover>
      {showModal && <Modal handleClickModal={() => setShowModal(false)} message={messageDialog.message} status={messageDialog.status} />}
    </div>
  );
}

export default Header;