import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import { FcReading } from "react-icons/fc";

function Header() {
  const [cookies, setCookie] = useCookies(['access_token', 'usrId']);
  const navigate = useNavigate();

  function handlSignOut() {
    setCookie("access_token", "", {});
    setCookie("usrId", "", {});
    setCookie("roles", "", {});
    navigate("/login");
  }

  return (
    <div className="navbar bg-blue-100 px-8">
      <div className="flex-1">
        <Link to="/invest" className="flex items-center text-3xl tracking-tighter font-semibold text-[#DA5800]">
          <img src="/logo.jpg" width={48} height={48} /><span className="ml-3">Invest Chill</span>
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full border-2 border-[#DA5800]">
              <FcReading className="w-full h-full p-1" />
            </div>
          </div>
          <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-60">
            <li className="py-6 text-center font-semibold text-xl">
              {cookies.usrId.usrNm} <br />
              {cookies.usrId.email}
            </li>
            <li><a className="text-lg">Settings</a></li>
            <li><a className="text-lg" onClick={handlSignOut}>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;