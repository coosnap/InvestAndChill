import { changePassword, getUserDetail, updateUser } from '@/api/user';
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { zodResolver } from '@hookform/resolvers/zod';
import { TextField } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { Controller, useForm } from 'react-hook-form';
import { FcReading } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { Label } from '../ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import Modal from './Modal';
import { AlertDialogTitle } from '@radix-ui/react-alert-dialog';

const passwordSchema = z
  .object({
    oldPassword: z.string().min(1, { message: 'Vui lòng điền mật khẩu' }),
    newPassword: z.string().min(1, { message: 'Vui lòng điền mật khẩu mới' }),
    confirmPassword: z.string().min(1, { message: 'Vui lòng điền mật khẩu xác nhận' }),
  })
  .superRefine(({ newPassword, confirmPassword }, ctx) => {
    if (newPassword !== confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Xác nhận mật khẩu không đúng',
        path: ['confirmPassword'],
      });
    }
  });

const phoneRegex = new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/);
const infoSchema = z.object({
  phoneNumber: z
    .string()
    .min(1, { message: 'Vui lòng điền số điện thoại' })
    .regex(phoneRegex, 'Chưa đúng định dạng số điện thoại'),
  username: z.string().min(1, { message: 'Vui lòng điền tên người dùng' }),
  firstName: z.string().min(1, { message: 'Vui lòng điền Tên' }),
  lastName: z.string().min(1, { message: 'Vui lòng điền Họ' }),
  email: z.string().min(1, { message: 'Vui lòng điền Email' }).email('Chưa đúng định dạng Email'),
  password: z.string().min(1, { message: 'Vui lòng điền mật khẩu' }),
});

function Header() {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(['access_token', 'usrId']);

  const [userInfo, setUserInfo] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [showPop, setShowPop] = useState(false);
  const [messageDialog, setMessageDialog] = useState({
    status: '',
    message: '',
  });
  const [tabDefault, setTabDefault] = useState('user');

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: 'all',
    defaultValues: {
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
    resolver: zodResolver(passwordSchema),
  });

  const {
    handleSubmit: handleSubmitInfo,
    control: controlInfo,
    formState: { errors: errorInfo },
    reset,
  } = useForm({
    mode: 'all',
    defaultValues: {
      phoneNumber: '',
      username: '',
      firstName: '',
      lastName: '',
      email: '',
    },
    resolver: zodResolver(infoSchema),
  });

  function handlSignOut() {
    setCookie('access_token', '', {});
    setCookie('usrId', '', {});
    setCookie('roles', '', {});
    navigate('/login');
  }

  const handleUpdateUser = async () => {
    const id = cookies.usrId.id;
    try {
      const result = await getUserDetail(id);
      if (result) {
        setUserInfo(result);
        if (userInfo) {
          let defaultValues = {
            phoneNumber: result.phoneNumber || '',
            username: result.username,
            fullName: result.fullName,
          };
          reset({ ...defaultValues });
        }
      }
    } catch (error) {
      setUserInfo({});
    }
  };

  const onSubmit = useCallback(async (values) => {
    const id = cookies.usrId.id;
    if (tabDefault === 'user') {
      let data = {
        id: id,
        phoneNumber: values?.phoneNumber || '',
        username: values?.username || '',
        fullName: values?.fullName || '',
        password: values?.password,
      };
      try {
        const response = await updateUser(data);
        if (response) {
          setShowPop(false);
          setMessageDialog((prev) => ({
            ...prev,
            status: 'Success',
            message: 'Update Successfully!',
          }));
          setShowModal(true);
          document.getElementById('user-info-cancel')?.click();
        } else {
          setShowPop(false);
          setMessageDialog((prev) => ({
            ...prev,
            status: 'Error',
            message: 'Mật khẩu xác nhận không đúng!',
          }));
          setShowModal(true);
        }
      } catch (error) {
        setMessageDialog((prev) => ({
          ...prev,
          status: 'Error',
          message: 'Update Fail!',
        }));
        setShowModal(true);
      }
    }
    if (tabDefault === 'password') {
      let data = {
        userName: cookies?.usrId?.usrNm,
        oldPassword: values?.oldPassword,
        newPassword: values?.newPassword,
      };
      try {
        const response = await changePassword(data);
        if (response) {
          setShowPop(false);
          setMessageDialog((prev) => ({
            ...prev,
            status: 'Success',
            message: 'Update Successfully!',
          }));
          setShowModal(true);
          document.getElementById('user-info-cancel')?.click();
        }
      } catch (error) {
        setShowPop(false);
        setMessageDialog((prev) => ({
          ...prev,
          status: 'Error',
          message: 'Update Fail!',
        }));
        setShowModal(true);
      }
    }
  }, []);

  useEffect(() => {
    if (!cookies?.usrId?.usrNm) navigate('/login');
  }, []);

  const onTabChange = (value) => {
    setTabDefault(value);
  };

  return (
    <div className="navbar flex justify-between items-center bg-fourth py-2 px-8">
      <div className="flex">
        <Link
          to="/invest"
          className="flex items-center text-3xl tracking-tighter font-semibold text-[#DA5800]"
        >
          <img src="/logo.jpg" width={48} height={48} />
          <span className="ml-3 text-4xl">InvestnChill</span>
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
              <h4 className="font-semibold text-2xl">{cookies?.usrId?.usrNm ?? ''}</h4>
              <p className="text-xl text-muted-foreground">{cookies?.usrId?.email ?? ''}</p>
            </div>
            {(cookies?.roles?.includes('ROLE_MODERATOR_USER') ||
              cookies?.roles?.includes('ROLE_ADMIN')) && (
              <Link to="/admin" className="text-lg">
                Đi tới Admin
              </Link>
            )}
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <button id="update-info" className="text-lg text-start" onClick={handleUpdateUser}>
                  Cập nhật thông tin
                </button>
              </AlertDialogTrigger>
              <AlertDialogContent aria-describedby="update-user" className="min-h-[550px]">
                <AlertDialogTitle></AlertDialogTitle>
                <div>
                  <Tabs value={tabDefault} onValueChange={onTabChange} className="w-full">
                    <TabsList className="flex flex-col items-start h-full pt-8 pb-4 px-4 border-none">
                      <div className="w-full mb-6 border p-2 rounded-lg">
                        <TabsTrigger className="w-1/2" value="user">
                          Thông tin người dùng
                        </TabsTrigger>
                        <TabsTrigger className="w-1/2" value="password">
                          Mật khẩu
                        </TabsTrigger>
                      </div>

                      <TabsContent value="user" className="w-full">
                        <form onSubmit={handleSubmitInfo((data) => onSubmit(data))}>
                          <div className="flex flex-col gap-3 w-full">
                            <div className="space-y-1">
                              <div className="mb-1">
                                <Label htmlFor="phoneNumber">Số điện thoại</Label>
                              </div>
                              <Controller
                                name="phoneNumber"
                                control={controlInfo}
                                render={({ field: { onChange, value } }) => (
                                  <TextField
                                    required
                                    name="phoneNumber"
                                    className="w-full"
                                    size="small"
                                    label=""
                                    type="text"
                                    onChange={onChange}
                                    value={value}
                                    error={!!errorInfo?.phoneNumber}
                                    helperText={errorInfo?.phoneNumber?.message}
                                  />
                                )}
                              />
                            </div>
                            <div className="space-y-1">
                              <div className="mb-1">
                                <Label htmlFor="username">Tên người dùng</Label>
                              </div>
                              <Controller
                                name="username"
                                control={controlInfo}
                                render={({ field: { onChange, value } }) => (
                                  <TextField
                                    required
                                    name="username"
                                    className="w-full"
                                    size="small"
                                    label=""
                                    type="text"
                                    onChange={onChange}
                                    value={value}
                                    error={!!errorInfo?.username}
                                    helperText={errorInfo?.username?.message}
                                  />
                                )}
                              />
                            </div>
                            <div className="space-y-1">
                              <div className="mb-1">
                                <Label htmlFor="fullName">Họ và Tên</Label>
                              </div>
                              <Controller
                                name="fullName"
                                control={controlInfo}
                                defaultValue={userInfo.fullName}
                                render={({ field: { onChange, value } }) => (
                                  <TextField
                                    required
                                    name="fullName"
                                    className="w-full"
                                    size="small"
                                    label=""
                                    type="text"
                                    onChange={onChange}
                                    value={value}
                                    error={!!errorInfo?.fullName}
                                    helperText={errorInfo?.fullName?.message}
                                  />
                                )}
                              />
                            </div>
                            <div className="space-y-1 w-full">
                              <div className="mb-1">
                                <Label htmlFor="password">Mật khẩu</Label>
                              </div>
                              <Controller
                                name="password"
                                control={controlInfo}
                                render={({ field: { onChange, value } }) => (
                                  <TextField
                                    required
                                    name="password"
                                    className="w-full"
                                    size="small"
                                    label=""
                                    type="password"
                                    onChange={onChange}
                                    value={value}
                                    error={!!errorInfo?.password}
                                    helperText={errorInfo?.password?.message}
                                  />
                                )}
                              />
                            </div>

                            <div className="flex justify-end gap-2 mt-6">
                              <Button id="user-info-cancel" variant="outline" type="submit">
                                Cancel
                              </Button>
                              <Button variant="primary" type="submit">
                                Save
                              </Button>
                            </div>
                          </div>
                        </form>
                      </TabsContent>
                      <TabsContent value="password" className="flex flex-col w-full">
                        <form onSubmit={handleSubmit(onSubmit)}>
                          <div className="w-full">
                            <div className="mb-1">
                              <Label htmlFor="oldPassword">Mật khẩu cũ</Label>
                            </div>
                            <Controller
                              name="oldPassword"
                              control={control}
                              render={({ field }) => (
                                <TextField
                                  required
                                  name="oldPassword"
                                  className="w-full"
                                  placeholder="Vui lòng nhập mật khẩu"
                                  label=""
                                  type="password"
                                  error={!!errors?.oldPassword}
                                  helperText={errors?.oldPassword?.message}
                                  {...field}
                                />
                              )}
                            />
                          </div>
                          <div className="h-5"></div>
                          <div className="w-full">
                            <div className="mb-1">
                              <Label htmlFor="newPassword" className="mb-2">
                                Mật khẩu mới
                              </Label>
                            </div>
                            <Controller
                              name="newPassword"
                              control={control}
                              render={({ field }) => (
                                <TextField
                                  required
                                  name="newPassword"
                                  className="w-full"
                                  placeholder="Vui lòng nhập mật khẩu mới"
                                  label=""
                                  type="password"
                                  error={!!errors?.newPassword}
                                  helperText={errors?.newPassword?.message}
                                  {...field}
                                />
                              )}
                            />
                          </div>
                          <div className="h-5"></div>
                          <div className="w-full">
                            <div className="mb-1">
                              <Label htmlFor="confirmPassword">Nhập lại mật khẩu</Label>
                            </div>
                            <Controller
                              name="confirmPassword"
                              control={control}
                              render={({ field }) => (
                                <TextField
                                  required
                                  name="confirmPassword"
                                  className="w-full"
                                  placeholder="Vui lòng nhập mật khẩu xác nhận"
                                  label=""
                                  type="password"
                                  error={!!errors?.confirmPassword}
                                  helperText={errors?.confirmPassword?.message}
                                  {...field}
                                />
                              )}
                            />
                          </div>

                          <AlertDialogFooter className="mt-6">
                            <AlertDialogCancel id="user-info-cancel">Cancel</AlertDialogCancel>
                            <Button variant="primary" type="submit">
                              Save
                            </Button>
                          </AlertDialogFooter>
                        </form>
                      </TabsContent>
                    </TabsList>
                  </Tabs>
                </div>
              </AlertDialogContent>
            </AlertDialog>
            <Button variant="primary" onClick={handlSignOut}>
              Logout
            </Button>
          </div>
        </PopoverContent>
      </Popover>
      {showModal && (
        <Modal
          handleClickModal={() => {
            messageDialog.status !== 'Error' ? setShowModal(false) : setShowModal(false);
            setShowPop(true);
          }}
          message={messageDialog.message}
          status={messageDialog.status}
        />
      )}
    </div>
  );
}

export default Header;
