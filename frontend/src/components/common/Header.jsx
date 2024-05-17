import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import { FcReading } from "react-icons/fc";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { getUserDetail, updateUser } from "@/api/user";
import { useState } from "react";

function Header() {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(['access_token', 'usrId']);

  const [userInfo, setUserInfo] = useState({});

  function handlSignOut() {
    setCookie("access_token", "", {});
    setCookie("usrId", "", {});
    setCookie("roles", "", {});
    navigate("/login");
  }

  async function handleUpdateUser() {
    const id = cookies[0].usrId.id;
    const result = await getUserDetail(id);
    if (result) setUserInfo(result);
  }

  async function handleClickSaveUser() {
    await updateUser(userInfo);
  }

  return (
    <div className="navbar bg-blue-100 px-8">
      <div className="flex-1">
        <Link to="/invest" className="flex items-center text-3xl tracking-tighter font-semibold text-[#DA5800]">
          <img src="/logo.jpg" width={48} height={48} /><span className="ml-3">Invest Chill</span>
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full border-2 border-[#DA5800]">
              <FcReading className="w-full h-full p-1" />
            </div>
          </div>
          <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-60">
            <li className="py-6 text-center font-semibold text-xl">
              {cookies.usrId.usrNm} <br />
              {cookies.usrId.email}
            </li>
            <li>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <a onClick={handleUpdateUser} className="text-lg">Settings</a>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle className="text-center mb-4">User Information</AlertDialogTitle>
                    <div className="flex flex-col gap-3">
                      <div className="flex">
                        <div className="space-y-1 w-1/2 pr-2">
                          <Label>Id</Label>
                          <Input
                            disabled
                            defaultValue={userInfo?.id ?? ""}
                          />
                        </div>
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
                      </div>
                      <div className="flex">
                        <div className="space-y-1 w-1/2 pr-2">
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
                        <div className="space-y-1 w-1/2 pr-2">
                          <Label htmlFor="password">Password</Label>
                          <Input
                            id="password"
                            defaultValue={userInfo?.password ?? ""}
                            onChange={(e) => {
                              setUserInfo((prev) => ({
                                ...prev,
                                password: e.target.value,
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
                    </div>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleClickSaveUser}>
                      Save
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </li>
            <li><a className="text-lg" onClick={handlSignOut}>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;