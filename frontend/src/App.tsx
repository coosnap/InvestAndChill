import {createTheme} from '@mui/material/styles';
import {jwtDecode} from 'jwt-decode';
import React, {Suspense, useEffect} from 'react';
import {useCookies} from 'react-cookie';
import {createBrowserRouter, Outlet, RouterProvider, useLocation, useRoutes} from 'react-router-dom';
import './App.scss';
import {ThemeProvider} from './ThemeProvider';
import Header from './components/common/Header';

import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify';

const Layout = ({hideHeaderPaths = []}) => {
  const {pathname} = useLocation();

  return (<>
    {!hideHeaderPaths.includes(pathname) ? <Header/> : <div className="h-8"></div>}
    <div className="wrapper">
      <Outlet/>
    </div>
  </>);
};

export const App = () => {
  const {pathname} = useLocation();
  const theme = createTheme();
  const [cookies, setCookie] = useCookies('access_token');

  useEffect(() => {

    const {access_token} = cookies;
    const now = Date.now() / 1000;

    if (access_token && jwtDecode(access_token).exp < now) {
      setCookie('access_token', '', {});
      window.location.href = '/';
    }
  }, [cookies]);

  return (<div className="App">
    <ThemeProvider defaultTheme="light" theme={theme} storageKey="vite-ui-theme">
      {pathname.includes('/post') ? <Outlet/> : <Layout hideHeaderPaths={['/']}/>}
      <ToastContainer/>
    </ThemeProvider>
  </div>);
}

