import { zodResolver } from '@hookform/resolvers/zod';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  InputAdornment,
  TextField,
} from '@mui/material';
import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { useCookies } from 'react-cookie';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { getArticleAll } from '../../../api/article';
import { sendEmail, signIn, signUp } from '../../../api/auth';
import Loader from '../../common/Loader';
import { Button } from '../../ui/button';
import { Label } from '../../ui/label';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { toast, ToastContainer } from 'react-toastify';
import './styles.scss';

const loginSchema = z.object({
  username: z.string().min(1, { message: 'Vui lòng điền tên đăng nhập' }),
  password: z.string().min(1, { message: 'Vui lòng điền mật khẩu' }),
});

const passwordValidation = new RegExp(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
);

const registerSchema = z
  .object({
    username: z.string().email({ message: 'Vui lòng điền đúng định dạng email' }),
    password: z.string().min(1, { message: 'Vui lòng điền mật khẩu' }).regex(passwordValidation, {
      message: 'Password phải bao gồm 8 ký tự, ký tự viết hoa và ký tự đặc biệt (#?!@$%^&*-)',
    }),
    passwordConfirm: z.string().min(1, { message: 'Vui lòng xác nhận mật khẩu' }),
  })
  .superRefine(({ passwordConfirm, password }, ctx) => {
    if (passwordConfirm !== password) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Xác nhận mật khẩu không đúng',
        path: ['passwordConfirm'],
      });
    }
    // if (dateOfBirth) {
    //   if (Number(isNaN(dateOfBirth.getTime()))) {
    //     ctx.addIssue({
    //       code: z.ZodIssueCode.custom,
    //       message: 'Vui lòng điền ngày sinh',
    //       path: ['dateOfBirth'],
    //     });
    //   }
    // }
  });

const forgotSchema = z.object({
  username: z
    .string()
    .min(1, { message: 'Vui lòng điền email' })
    .email('Chưa đúng định dạng Email'),
});

function Login() {
  const id = useId();
  const navigate = useNavigate();

  const [showRegisterDialog, setShowRegisterDialog] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordRe, setShowPasswordRe] = useState(false);
  const [showPasswordConf, setShowPasswordConf] = useState(false);
  const [cookie, setCookie] = useCookies(['access_token', 'usrId', 'roles']);
  const [isLoading, setIsLoading] = useState(false);
  const [articleList, setArticleList] = useState([]);
  const [validate, setValidate] = useState({});
  const [openForgot, setOpenForgot] = useState(false);
  const [articleId, setArticleId] = useState({});

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: 'all',
    defaultValues: {
      username: '',
      password: '',
    },
    resolver: zodResolver(loginSchema),
  });

  const {
    handleSubmit: handleSubmitRegister,
    control: controlRegister,
    formState: { errors: errorsRegister },
  } = useForm({
    mode: 'all',
    defaultValues: {
      username: '',
      password: '',
      passwordConfirm: '',
      fullName: '',
    },
    resolver: zodResolver(registerSchema),
  });

  const {
    handleSubmit: handleSubmitForgot,
    control: controlForgot,
    formState: { errors: errorForgot },
  } = useForm({
    mode: 'all',
    defaultValues: {
      username: '',
    },
    resolver: zodResolver(forgotSchema),
  });

  const onSubmitForgot = useCallback(async (values) => {
    try {
      let result = await sendEmail(values);
      if (result) {
        toast.success('Send Email Successfully!', {
          position: 'top-right',
        });
        setOpenForgot(false);
      }
    } catch (error) {
      toast.error('Send Email Fail!', {
        position: 'top-right',
      });
    }
  }, []);

  const onSubmitRegister = useCallback(async (values) => {
    try {
      // let data = {
      //   ...values,
      //   dateOfBirth: format(values.dateOfBirth, 'dd-MM-yyyy'),
      // };
      const response = await signUp(values);
      if (response.message) {
        toast.success('Đăng ký thành công!', {
          position: 'top-right',
        });
        setShowRegisterDialog(false);
      }
    } catch (error) {
      toast.error('Đăng ký thất bại!', {
        position: 'top-right',
      });
    }
  }, []);

  const onSubmit = useCallback(async (values) => {
    setValidate({});
    try {
      let infoSignIn = await signIn(values);
      // setIsLoading(true);
      if (infoSignIn?.accessToken) {
        // let exp = jwtDecode(infoSignIn?.accessToken)?.exp;
        // let d = new Date(exp * 1000);
        let d = new Date();
        d.setHours(d.getHours() + 2);
        setCookie(
          'usrId',
          {
            id: infoSignIn.id,
            usrNm: infoSignIn.username,
          },
          { path: '/', expires: d }
        );
        setCookie('access_token', infoSignIn.accessToken, { path: '/', expires: d });
        setCookie('roles', infoSignIn.roles, { path: '/', expires: d });
        // setIsLoading(false);
        infoSignIn.roles.includes('ROLE_ADMIN') ||
        infoSignIn.roles.includes('ROLE_MODERATOR_ARTICLE') ||
        infoSignIn.roles.includes('ROLE_MODERATOR_USER')
          ? (window.location.href = '/')
          : (window.location.href = '/invest');
      } else {
        // setIsLoading(false);
        setValidate((prev) => ({
          ...prev,
          loginMessage: 'Tên đăng nhập hoặc mật khẩu không đúng',
        }));
      }
    } catch (error) {
      toast.error('Tên người dùng hoặc Mật khẩu không đúng.!', {
        position: 'top-right',
      });
    }
  }, []);

  async function getData() {
    try {
      setIsLoading(true);
      const article = await getArticleAll();
      setArticleList(article);
    } catch (error) {
      setArticleList([]);
      setIsLoading(false);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    getData();
    if (cookie.access_token && location.pathname == '/') {
      if (
        cookie.roles.includes('ROLE_ADMIN') ||
        cookie.roles.includes('ROLE_MODERATOR_USER') ||
        cookie.roles.includes('ROLE_MODERATOR_ARTICLE')
      )
        navigate('/admin');
      else navigate('/invest');
    }
  }, []);

  const plugin = useRef(Autoplay({ delay: 15000, stopOnInteraction: true }));

  function openArticleById(id) {
    let item = articleList.find((e) => e.id === id);
    setArticleId(item);
  }

  if (isLoading) return <Loader />;

  return (
    <div className="h-full bg-primary">
      {/* {isLoading ? <Loader /> : ''} */}
      <div className="sm:w-[80%] vm:w-[90%] flex sm:flex-row vm:flex-col mx-auto gap-4 pb-8">
        <div className="sm:w-1/2 vm:w-full flex flex-col gap-4">
          <div className="flex justify-center rounded-2xl bg-white gap-4 px-8 py-4">
            {articleId.title ? (
              <div className="w-full h-[350px] border bg-second overflow-y-auto rounded-md p-4">
                <h6>{articleId.title}</h6>
                <div dangerouslySetInnerHTML={{ __html: articleId.content }} />
              </div>
            ) : (
              <Carousel
                plugins={[plugin.current]}
                opts={{
                  align: 'start',
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent>
                  {articleList &&
                    articleList.length > 0 &&
                    articleList.map((e, index) => (
                      <CarouselItem key={index}>
                        <div className="p-1">
                          <Card>
                            <CardContent className="h-[350px] flex items-center justify-center p-1">
                              <div className="w-full h-full border bg-second overflow-y-auto rounded-md p-4">
                                <h6>{e.title}</h6>
                                <div dangerouslySetInnerHTML={{ __html: e.content }} />
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="left-4 bg-white" />
                <CarouselNext className="right-4 bg-white" />
              </Carousel>
            )}
          </div>
          <div className="py-4 px-8 bg-white rounded-2xl">
            {articleList &&
              articleList.length > 0 &&
              articleList.map(
                (e, i) =>
                  i <= 4 && (
                    <div
                      className={`flex justify-between text-gray-900 text-sm mb-1 cursor-pointer pb-1`}
                      key={e.id}
                      onClick={() => openArticleById(e.id)}
                    >
                      <div className="truncate-single-line flex">
                        <StickyNote2Icon color="primary" sx={{ marginRight: '8px' }} />
                        <p>{e.title}</p>
                      </div>
                      <div className="flex-1 border-b border-dotted border-black mx-1 mb-2"></div>
                      <div className="w-[72px] whitespace-nowrap">{e.createDate.split(' ')[0]}</div>
                    </div>
                  )
              )}
          </div>
        </div>
        <div className="sm:w-1/2 vm:w-full flex flex-col gap-4">
          <div className="rounded-2xl bg-white shadow-2xl flex flex-col items-center justify-center py-4">
            <div className="flex items-center justify-center text-3xl lg:text-2xl font-semibold text-gray-900">
              Đăng nhập
            </div>
            <form key={id} onSubmit={handleSubmit(onSubmit)} className="px-8 w-full">
              <div className="h-3"></div>
              <Controller
                name="username"
                control={control}
                render={({ field }) => (
                  <TextField
                    required
                    name="username"
                    className="w-full z-0"
                    size="small"
                    label="Tên đăng nhập"
                    type="text"
                    error={!!errors?.username}
                    helperText={errors?.username?.message}
                    {...field}
                  />
                )}
              />
              <div className="h-5"></div>
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <TextField
                    required
                    name="password"
                    className="w-full z-0"
                    label="Mật khẩu"
                    size="small"
                    error={!!errors?.password}
                    type={!showPassword ? 'password' : 'text'}
                    helperText={errors?.password?.message}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => setShowPassword(!showPassword)}
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
              {validate.loginMessage ? (
                <div className="text-center mt-2">
                  <Label className="text-red-500">{validate.loginMessage}</Label>
                </div>
              ) : null}
              <div className="flex items-center justify-between mt-2">
                <div>
                  <span
                    className="mt-4 lg:mt-2 font-semibold text-blue-500 hover:text-blue-300 underline cursor-pointer"
                    onClick={() => setOpenForgot(true)}
                  >
                    Quên mật khẩu
                  </span>
                </div>
                <div className="text-end">
                  <span
                    className="mt-4 lg:mt-2 font-semibold text-blue-500 hover:text-blue-300 underline cursor-pointer"
                    onClick={() => setShowRegisterDialog(true)}
                  >
                    Đăng ký tài khoản
                  </span>
                </div>
              </div>
              <div className="w-full text-center">
                <Button type="submit" variant="primary" className="mt-2">
                  Đăng nhập
                </Button>
              </div>
            </form>
          </div>
          <div className="flex-1">
            <img style={{ width: '100%' }} src="/adv.jpg" alt="Advert" />
          </div>
        </div>
      </div>

      <Dialog
        sx={{
          '.MuiPaper-root': {
            maxWidth: '500px',
            width: '100%',
            minHeight: '180px',
          },
        }}
        open={showRegisterDialog}
      >
        <DialogTitle variant="h5" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
          Đăng ký tài khoản
        </DialogTitle>
        <DialogContent>
          <form className="py-2" onSubmit={handleSubmitRegister(onSubmitRegister)}>
            <Controller
              name="username"
              control={controlRegister}
              render={({ field }) => (
                <TextField
                  required
                  name="username"
                  className="w-full"
                  label="Tên đăng nhập"
                  type="text"
                  size="small"
                  error={!!errorsRegister?.username}
                  helperText={errorsRegister?.username?.message}
                  {...field}
                />
              )}
            />
            <div className="h-5"></div>
            <Controller
              name="fullName"
              control={controlRegister}
              render={({ field }) => (
                <TextField
                  name="fullName"
                  className="w-full"
                  label="Họ và Tên"
                  type="text"
                  size="small"
                  error={!!errorsRegister?.fullName}
                  helperText={errorsRegister?.fullName?.message}
                  {...field}
                />
              )}
            />
            {/* <div className="flex gap-4">
                    <Controller
                      name="dateOfBirth"
                      control={controlRegister}
                      rules={{ required: true }}
                      render={({ field }) => {
                        return (
                          <TextField
                            required
                            className="w-1/2"
                            name="dateOfBirth"
                            type="date"
                            size="small"
                            error={!!errorsRegister?.dateOfBirth}
                            helperText={errorsRegister?.dateOfBirth?.message}
                            {...field}
                          />
                        );
                      }}
                    />
                  </div> */}
            <div className="h-5"></div>
            <Controller
              name="password"
              control={controlRegister}
              render={({ field }) => (
                <TextField
                  required
                  name="password"
                  className="w-full"
                  label="Mật khẩu"
                  size="small"
                  error={!!errorsRegister?.password}
                  type={!showPasswordRe ? 'password' : 'text'}
                  helperText={errorsRegister?.password?.message}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => setShowPasswordRe(!showPasswordRe)}
                          edge="end"
                        >
                          {showPasswordRe ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  {...field}
                />
              )}
            />
            <div className="h-5"></div>
            <Controller
              name="passwordConfirm"
              control={controlRegister}
              render={({ field }) => (
                <TextField
                  required
                  name="passwordConfirm"
                  className="w-full"
                  label="Xác nhận mật khẩu"
                  size="small"
                  error={!!errorsRegister?.passwordConfirm}
                  type={!showPasswordConf ? 'password' : 'text'}
                  helperText={errorsRegister?.passwordConfirm?.message}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => setShowPasswordConf(!showPasswordConf)}
                          edge="end"
                        >
                          {showPasswordConf ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  {...field}
                />
              )}
            />

            <div className="flex justify-end gap-2 mt-6">
              <Button variant="outline" onClick={() => setShowRegisterDialog(false)}>
                Cancel
              </Button>
              <Button variant="primary" type="submit">
                Save
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog
        sx={{
          '.MuiPaper-root': {
            maxWidth: '500px',
            width: '100%',
            minHeight: '180px',
          },
        }}
        open={openForgot}
      >
        <DialogTitle variant="h5" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
          Quên mật khẩu
        </DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmitForgot(onSubmitForgot)}>
            <div className="w-full">
              <div className="mb-1">
                <Label htmlFor="username">Email</Label>
              </div>
              <Controller
                name="username"
                control={controlForgot}
                render={({ field }) => (
                  <TextField
                    required
                    name="username"
                    className="w-full"
                    placeholder="Vui lòng nhập email"
                    label=""
                    size="small"
                    type="text"
                    error={!!errorForgot?.username}
                    helperText={errorForgot?.username?.message}
                    {...field}
                  />
                )}
              />
            </div>

            <div className="flex justify-end gap-2 mt-6">
              <Button variant="outline" onClick={() => setOpenForgot(false)}>
                Cancel
              </Button>
              <Button variant="primary" type="submit">
                Save
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      <ToastContainer />
    </div>
  );
}

export default Login;
