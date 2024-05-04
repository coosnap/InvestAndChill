import { useCookies } from "react-cookie";
import { Navigate } from 'react-router-dom'

const AdminRoute = ({ children }) => {
  const [cookie, setCookie] = useCookies(['roles']);
  if (cookie.roles.includes("ROLE_MOD") || cookie.roles.includes("ROLE_ADMIN")) return children;
  return (<Navigate to={'/login'} />);
}

export default AdminRoute;