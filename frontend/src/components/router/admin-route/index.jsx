import { useCookies } from "react-cookie";
import { Navigate } from 'react-router-dom'

const AdminRoute = ({ children }) => {
  const cookie = useCookies(['roles']);
  if (cookie[0].roles.includes("ROLE_MODERATOR_USER") || cookie[0].roles.includes("ROLE_MODERATOR_ARTICLE") || cookie[0].roles.includes("ROLE_ADMIN")) return children;
  return (<Navigate to={'/login'} />);
}

export default AdminRoute;