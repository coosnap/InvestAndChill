import {useCookies} from 'react-cookie';
import {Navigate} from 'react-router-dom';

const PrivateRoute = ({children}) => {
  const cookie = useCookies(['roles']);

  if (cookie[0]?.roles?.length > 0) {
    return children;
  }
  return <Navigate to={'/'}/>;
};

export default PrivateRoute;
