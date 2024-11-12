import { createTheme } from '@mui/material';
import { jwtDecode } from 'jwt-decode';
import React, { Suspense, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { Outlet, useLocation, useRoutes } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from './ThemeProvider';
import Login from './components/pages/login';
import AdminRoute from './components/router/admin-route';
import PrivateRoute from './components/router/private-route';
import PublicRoute from './components/router/public-route';
import Detail from './components/pages/detail';
import Header from './components/common/Header';
import Category from './components/pages/Category';
import Investment from './components/pages/Investment';

import 'react-toastify/dist/ReactToastify.css';
import { Charts } from './components/pages/chart';

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
        <Login />
      </PublicRoute>
    ),
  },
  {
    path: '/login',
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
  },
  {
    path: '/chart',
    element: (
      <PublicRoute>
        <Suspense>
          <Charts />
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
        <Investment />
      </PrivateRoute>
    ),
  },
  {
    path: '/category',
    element: (
      <PrivateRoute>
        <Category />
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
        <Detail />
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
      window.location.href = '/login';
    }
  }, [cookies]);

  return (
    <ThemeProvider defaultTheme="light" theme={theme} storageKey="vite-ui-theme">
      <div className="App">
        {pathname.includes('/post') ? <></> : <Layout hideHeaderPaths={['/', '/login']} />}
        {routesElement}
      </div>
    </ThemeProvider>
  );
}
export default App;
