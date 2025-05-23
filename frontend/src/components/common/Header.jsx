import { changePassword, getUserDetail, updateUser } from '@/api/user';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { zodResolver } from '@hookform/resolvers/zod';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  InputAdornment,
  TextField,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { Controller, useForm } from 'react-hook-form';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { z } from 'zod';
import { Label } from '../ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

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
  phoneNumber: z.string().regex(phoneRegex, 'Chưa đúng định dạng số điện thoại'),
  username: z
    .string()
    .min(1, { message: 'Vui lòng điền tên người dùng' })
    .email('Chưa đúng định dạng Email'),
  fullName: z.string(),
  password: z.string().min(1, { message: 'Vui lòng điền mật khẩu' }),
});

function stringToSlug(str) {
  var from = 'àáãảạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệđùúủũụưừứửữựòóỏõọôồốổỗộơờớởỡợìíỉĩịäëïîöüûñçýỳỹỵỷ',
    to = 'aaaaaaaaaaaaaaaaaeeeeeeeeeeeduuuuuuuuuuuoooooooooooooooooiiiiiaeiiouuncyyyyy';
  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(RegExp(from[i], 'gi'), to[i]);
  }

  str = str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\-]/g, '-')
    .replace(/-+/g, '-');

  return str.toUpperCase();
}

function Header() {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabName = window.localStorage.getItem('tabName');
  const initialValue = searchParams.get('code') || '';
  const [inputValue, setInputValue] = useState(initialValue);

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [cookies, setCookie] = useCookies(['access_token', 'usrId']);

  const [userInfo, setUserInfo] = useState({});
  const [showPop, setShowPop] = useState(false);
  const [tabDefault, setTabDefault] = useState('user');
  const [open, setOpen] = useState(false);
  const [valueChange, setValueChange] = useState(initialValue || '');
  const [showPassword, setShowPassword] = useState({
    password: false,
    old: false,
    new: false,
    conf: false,
  });

  useEffect(() => {
    if (inputValue) {
      setSearchParams({ code: inputValue, tab: tabName });
    } else {
      setSearchParams({});
    }
  }, [inputValue, setSearchParams]);

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
      fullName: '',
      password: '',
    },
    resolver: zodResolver(infoSchema),
  });

  function handlSignOut() {
    setCookie('access_token', '', {});
    setCookie('usrId', '', {});
    setCookie('roles', '', {});
    navigate('/');
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
            username: result.username || '',
            fullName: result.fullName || '',
          };
          reset({ ...defaultValues });
        }
      }
      setOpen(true);
    } catch (error) {
      setUserInfo({});
    }
  };

  const onSubmit = async (values) => {
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
          toast.success('Update Successfully!', {
            position: 'top-right',
            closeOnClick: true,
            draggable: false,
            toastId: 1,
          });
          setTimeout(
            (data = {
              id: '',
              phoneNumber: '',
              username: '',
              fullName: '',
              password: '',
            }),
            navigate('/'),
            2000
          );
        } else {
          setShowPop(false);
          toast.error('Mật khẩu xác nhận không đúng!', {
            position: 'top-right',
            autoClose: true,
            closeOnClick: true,
            draggable: false,
            toastId: 2,
          });
        }
      } catch (error) {
        toast.error('Update Fail!', {
          position: 'top-right',
          autoClose: true,
          closeOnClick: true,
          draggable: false,
          toastId: 3,
        });
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
          toast.success('Update Successfully!', {
            position: 'top-right',
            autoClose: true,
            closeOnClick: true,
            draggable: false,
            toastId: 4,
          });
          setTimeout(
            (data = {
              userName: '',
              oldPassword: '',
              newPassword: '',
            }),
            navigate('/'),
            2000
          );
        }
      } catch (error) {
        setShowPop(false);
        toast.error('Update Fail!', {
          position: 'top-right',
          autoClose: true,
          closeOnClick: true,
          draggable: false,
          toastId: 5,
        });
      }
    }
  };

  useEffect(() => {
    if (!cookies?.usrId?.usrNm) navigate('/');
  }, []);

  const onTabChange = (value) => {
    setTabDefault(value);
  };

  return (
    <div className="navbar flex items-center bg-fourth pt-1 pb-2 sm:px-8 vm:px-2">
      <div className="flex flex-1">
        <a
          href="/invest"
          className="flex items-center text-3xl tracking-tighter font-semibold text-[#DA5800]"
        >
          {/* <img src="/logo.jpg" width={48} height={48} /> */}
          <h5 className="text-white">InvestNChill.com</h5>
        </a>
        {pathname.includes('/data') && (
          <div className="ml-4 mt-1 flex items-center gap-6">
            <TextField
              sx={{ '& > .MuiOutlinedInput-root': { backgroundColor: 'white' } }}
              variant="outlined"
              size="small"
              placeholder="Tìm kiếm"
              onChange={(e) => setValueChange(stringToSlug(e.target.value))}
              value={valueChange}
              onKeyDown={(e) => {
                if (e.keyCode == 13) {
                  setInputValue(e.target.value?.toUpperCase());
                  navigate('/data/chart', { code: inputValue, tab: tabName });
                }
              }}
            />
            <a className="text-white" href={'/data/pattern'}>
              MẪU HÌNH
            </a>
            <a className="text-white" href={'/data/filter'}>
              BỘ LỌC
            </a>
          </div>
        )}
      </div>
      <Popover open={showPop} onOpenChange={setShowPop}>
        <a href="/product" className="flex items-center text-white mr-2">
          <KeyboardDoubleArrowUpIcon />
          <span>Sản phẩm</span>
        </a>
        <PopoverTrigger asChild>
          <button>
            <AccountBoxRoundedIcon fontSize="large" sx={{ color: '#E9E9E9' }} />
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
              <a href="/admin" className="text-lg" onClick={() => setShowPop(false)}>
                Đi tới Admin
              </a>
            )}
            <button id="update-info" className="text-lg text-start" onClick={handleUpdateUser}>
              Cập nhật thông tin
            </button>
            <Button variant="primary" onClick={handlSignOut}>
              Logout
            </Button>
          </div>
        </PopoverContent>
      </Popover>
      <Dialog
        sx={{
          '.MuiPaper-root': {
            maxWidth: '500px',
            width: '100%',
            minHeight: '180px',
          },
        }}
        open={open}
      >
        <DialogTitle variant="h5" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
          Update User
        </DialogTitle>
        <DialogContent>
          <Tabs value={tabDefault} onValueChange={onTabChange} className="w-full">
            <TabsList className="flex flex-col items-start h-full vm:pt-0 sm:pt-8 pb-4 px-4 border-none">
              <div className="flex w-full vm:mb-2 sm:mb-6 border p-2 rounded-lg">
                <TabsTrigger className="w-1/2" value="user">
                  <p>Thông tin người dùng</p>
                </TabsTrigger>
                <TabsTrigger className="w-1/2" value="password">
                  <p>Mật khẩu</p>
                </TabsTrigger>
              </div>

              <TabsContent value="user" className="w-full">
                <form onSubmit={handleSubmitInfo(onSubmit)}>
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
                            type={!showPassword.password ? 'password' : 'text'}
                            onChange={onChange}
                            value={value}
                            error={!!errorInfo?.password}
                            helperText={errorInfo?.password?.message}
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="end">
                                  <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={() =>
                                      setShowPassword((prev) => ({
                                        ...prev,
                                        password: !showPassword.password,
                                      }))
                                    }
                                    edge="end"
                                  >
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                  </IconButton>
                                </InputAdornment>
                              ),
                            }}
                          />
                        )}
                      />
                    </div>
                  </div>
                  <div className="flex justify-end gap-2 mt-6">
                    <Button variant="outline" onClick={() => setOpen(false)}>
                      Cancel
                    </Button>
                    <Button variant="primary" type="submit">
                      Save
                    </Button>
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
                          size="small"
                          type={!showPassword.old ? 'password' : 'text'}
                          error={!!errors?.oldPassword}
                          helperText={errors?.oldPassword?.message}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={() =>
                                    setShowPassword((prev) => ({ ...prev, old: !showPassword.old }))
                                  }
                                  edge="end"
                                >
                                  {showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
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
                          size="small"
                          type={!showPassword.new ? 'password' : 'text'}
                          error={!!errors?.newPassword}
                          helperText={errors?.newPassword?.message}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={() =>
                                    setShowPassword((prev) => ({ ...prev, new: !showPassword.new }))
                                  }
                                  edge="end"
                                >
                                  {showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
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
                          size="small"
                          type={!showPassword.conf ? 'password' : 'text'}
                          error={!!errors?.confirmPassword}
                          helperText={errors?.confirmPassword?.message}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={() =>
                                    setShowPassword((prev) => ({
                                      ...prev,
                                      conf: !showPassword.conf,
                                    }))
                                  }
                                  edge="end"
                                >
                                  {showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                          {...field}
                        />
                      )}
                    />
                  </div>

                  <div className="flex justify-end gap-2 mt-6">
                    <Button variant="outline" onClick={() => setOpen(false)}>
                      Cancel
                    </Button>
                    <Button variant="primary" type="submit">
                      Save
                    </Button>
                  </div>
                </form>
              </TabsContent>
            </TabsList>
          </Tabs>
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </div>
  );
}

export default Header;
