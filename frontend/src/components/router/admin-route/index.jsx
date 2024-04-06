import { auth } from "../../../api/auth";
import { Navigate } from 'react-router-dom'

const AdminRoute = ({ children }) => {
  if (auth.isMod || auth.isAdmin) return children;
  return (<Navigate to={'/login'} />);
}

export default AdminRoute;