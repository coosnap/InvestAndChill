import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children, redirectPath, usrId }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (usrId === undefined) return navigate(redirectPath);
  }, [])
  return children;
}
export default ProtectedRoute;