import { MdAccountCircle } from "react-icons/md";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

function Header() {
  const [cookies, setCookie] = useCookies(['access_token', 'usrId']);
  const navigate = useNavigate();

  function handlSignOut() {
    setCookie("access_token", "", {});
    setCookie("usrId", "", {});
    navigate("/login");
  }
  return (
    <div className="">
      <button onClick={handlSignOut}>
        <MdAccountCircle size={48} />
      </button>
    </div>
  );
}

export default Header;