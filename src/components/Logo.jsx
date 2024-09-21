import { Link } from "react-router-dom";
import logo from "../assets/Logo/logo.png";
const Logo = () => {
  return (
    <Link>
      <img src={logo} alt="ibrahim" className="w-12 transform-gpu hover:scale-110 transition duration-300 " />
    </Link>
  );
};

export default Logo;
