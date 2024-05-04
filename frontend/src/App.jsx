import { Outlet, useLocation, useRoutes } from 'react-router-dom';
import "./App.css";
import { ThemeProvider } from './ThemeProvider';
import Admin from './components/admin/Admin.jsx';
import Header from './components/common/Header';
import Category from "./components/pages/Category.jsx";
import Investment from "./components/pages/Investment/index.jsx";
import Login from "./components/pages/Login.jsx";
import Post from "./components/pages/Post.jsx";
import Product from "./components/pages/Product.jsx";
import Question from "./components/pages/Question.jsx";
import AdminRoute from "./components/router/admin-route";
import PrivateRoute from "./components/router/private-route";
import PublicRoute from "./components/router/public-route";
import Detail from './components/pages/Detail';

const routes = [
  {
    path: "*",
    element: <PublicRoute><Login /></PublicRoute>
  },
  {
    path: "/login",
    element: <PublicRoute><Login /></PublicRoute>
  },
  {
    path: "/post/:id",
    element: <PublicRoute><Post /></PublicRoute>
  },
  {
    path: "/invest",
    element: <PrivateRoute><Investment /></PrivateRoute>
  },
  {
    path: "/category",
    element: <PrivateRoute><Category /></PrivateRoute>
  },
  {
    path: "/product",
    element: <PrivateRoute><Product /></PrivateRoute>
  },
  {
    path: "/question",
    element: <PrivateRoute><Question /></PrivateRoute>
  },
  {
    path: "/detail/:id",
    element: <PrivateRoute><Detail /></PrivateRoute>
  },
  {
    path: "/admin",
    element: <AdminRoute><Admin /></AdminRoute>
  },
]

const Layout = ({ hideHeaderPaths = [] }) => {
  const { pathname } = useLocation();

  return (
    <>
      {!hideHeaderPaths.includes(pathname) && <Header />}
      <Outlet />
    </>
  );
}

function App() {
  const routesElement = useRoutes(routes);
  const { pathname } = useLocation();

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="App">
        {pathname.includes("/post") ? <></> : <Layout hideHeaderPaths={["/", "/login"]} />}
        {routesElement}
      </div>
    </ThemeProvider>
  )
}
export default App