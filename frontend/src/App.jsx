import { createTheme } from '@mui/material';
import React, { Suspense } from 'react';
import { Outlet, useLocation, useRoutes } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from './ThemeProvider';
import AdminRoute from './components/router/admin-route';
import PrivateRoute from './components/router/private-route';
import PublicRoute from './components/router/public-route';

const Admin = React.lazy(() => import('./components/admin/Admin.jsx'));
const Header = React.lazy(() => import('./components/common/Header'));
const Buy = React.lazy(() => import('./components/pages/Buy'));
const Category = React.lazy(() => import('./components/pages/Category.jsx'));
const Detail = React.lazy(() => import('./components/pages/detail'));
const Investment = React.lazy(() => import('./components/pages/investment'));
const Login = React.lazy(() => import('./components/pages/login'));
const NotFound = React.lazy(() => import('./components/pages/NotFound'));
const Post = React.lazy(() => import('./components/pages/Post.jsx'));
const Product = React.lazy(() => import('./components/pages/Product.jsx'));
const Question = React.lazy(() => import('./components/pages/Question.jsx'));

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
    path: '/login',
    element: (
      <PublicRoute>
        <Suspense>
          <Login />
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
      {!hideHeaderPaths.includes(pathname) && (
        <Suspense>
          <Header />
        </Suspense>
      )}
      <Outlet />
    </>
  );
};

function App() {
  const routesElement = useRoutes(routes);
  const { pathname } = useLocation();
  const theme = createTheme();

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
