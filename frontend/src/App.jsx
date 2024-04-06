import "./App.css";
import { useRoutes } from 'react-router-dom';
import Investment from "./components/pages/Investment.jsx";
import Login from "./components/pages/Login.jsx";
import Category from "./components/pages/Category.jsx";
import Product from "./components/pages/Product.jsx";
import Question from "./components/pages/Question.jsx";
import PublicRoute from "./components/router/public-route";
import PrivateRoute from "./components/router/private-route";
import AdminRoute from "./components/router/admin-route";
import Admin from './components/admin/Admin.jsx';

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
    element: <PrivateRoute><Product /></PrivateRoute>
  },
  {
    path: "/admin",
    element: <AdminRoute><Admin /></AdminRoute>
  },
]

function App() {
  const routesElement = useRoutes(routes);

  return (
    <div className="App">
      {routesElement}
    </div>
  )
}
export default App