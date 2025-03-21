import { createTheme } from '@mui/material';
import { jwtDecode } from 'jwt-decode';
import React, { Suspense, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { Outlet, useLocation, useRoutes } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from './ThemeProvider';
import Header from './components/common/Header';
import Login from './components/pages/login';
import AdminRoute from './components/router/admin-route';
import PrivateRoute from './components/router/private-route';
import PublicRoute from './components/router/public-route';

import 'react-toastify/dist/ReactToastify.css';
import { Charts } from './components/pages/chart';
import { ToastContainer } from 'react-toastify';
import { Pattern } from './components/pages/chart/pattern';
import { Filter } from './components/pages/chart/filter';

const Detail = React.lazy(() => import('./components/pages/detail'));
const Investment = React.lazy(() => import('./components/pages/Investment'));
const Category = React.lazy(() => import('./components/pages/Category'));
const Footer = React.lazy(() => import('./components/common/Footer'));
const Admin = React.lazy(() => import('./components/admin/Admin'));
const Buy = React.lazy(() => import('./components/pages/Buy'));
const NotFound = React.lazy(() => import('./components/pages/NotFound'));
const Post = React.lazy(() => import('./components/pages/Post'));
const Product = React.lazy(() => import('./components/pages/Product'));
const Question = React.lazy(() => import('./components/pages/Question'));

const routes = [
  {
    path: '*',
    element: (
      <PublicRoute>
        <Suspense>
          <NotFound />
        </Suspense>
      </PublicRoute>
    ),
  },
  {
    path: '/',
    element: (
      <PublicRoute>
        <Suspense>
          <Login />
        </Suspense>
      </PublicRoute>
    ),
  },
  {
    path: '/data/chart',
    element: (
      <PublicRoute>
        <Suspense>
          <Charts />
        </Suspense>
      </PublicRoute>
    ),
  },
  {
    path: '/data/pattern',
    element: (
      <PublicRoute>
        <Suspense>
          <Pattern />
        </Suspense>
      </PublicRoute>
    ),
  },
  {
    path: '/data/filter',
    element: (
      <PublicRoute>
        <Suspense>
          <Filter />
        </Suspense>
      </PublicRoute>
    ),
  },
  {
    path: '/post/:id',
    element: (
      <PublicRoute>
        <Suspense>
          <Post />
        </Suspense>
      </PublicRoute>
    ),
  },
  {
    path: '/invest',
    element: (
      <PrivateRoute>
        <Suspense>
          <Investment />
          <Footer />
        </Suspense>
      </PrivateRoute>
    ),
  },
  {
    path: '/category',
    element: (
      <PrivateRoute>
        <Suspense>
          <Category />
        </Suspense>
      </PrivateRoute>
    ),
  },
  {
    path: '/product',
    element: (
      <PrivateRoute>
        <Suspense>
          <Product />
        </Suspense>
      </PrivateRoute>
    ),
  },
  {
    path: '/question',
    element: (
      <PrivateRoute>
        <Suspense>
          <Question />
        </Suspense>
      </PrivateRoute>
    ),
  },
  {
    path: '/detail',
    element: (
      <PrivateRoute>
        <Suspense>
          <Detail />
        </Suspense>
      </PrivateRoute>
    ),
  },
  {
    path: '/buy/:id',
    element: (
      <PrivateRoute>
        <Suspense>
          <Buy />
        </Suspense>
      </PrivateRoute>
    ),
  },
  {
    path: '/admin/:id',
    element: (
      <AdminRoute>
        <Suspense>
          <Admin />
        </Suspense>
      </AdminRoute>
    ),
  },
  {
    path: '/admin',
    element: (
      <AdminRoute>
        <Suspense>
          <Admin />
        </Suspense>
      </AdminRoute>
    ),
  },
];

const Layout = ({ hideHeaderPaths = [] }) => {
  const { pathname } = useLocation();

  return (
    <>
      {!hideHeaderPaths.includes(pathname) ? <Header /> : <div className="h-8"></div>}
      <Outlet />
    </>
  );
};

function App() {
  const routesElement = useRoutes(routes);
  const { pathname } = useLocation();
  const theme = createTheme();
  const [cookies, setCookie] = useCookies('access_token');

  useEffect(() => {
    if (cookies?.access_token && jwtDecode(cookies?.access_token).exp < Date.now() / 1000) {
      setCookie('access_token', '', {});
      window.location.href = '/';
    }
  }, [cookies]);

  return (
    <div className="App">
      <ThemeProvider defaultTheme="light" theme={theme} storageKey="vite-ui-theme">
        {pathname.includes('/post') ? <></> : <Layout hideHeaderPaths={['/']} />}
        {routesElement}
        <ToastContainer />
      </ThemeProvider>
    </div>
  );
}
export default App;
