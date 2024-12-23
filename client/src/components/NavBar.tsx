import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
const NavBar = () => {
  return (
    <div className="shadow py-4">
      <nav className="bg-white">
        <div className="container px-4 2xl:px-20 mx-auto flex justify-between items-center">
          <Link className="flex items-center" to="/">
            <img src={assets.logo} alt="Job Portal logo" />
          </Link>
          <div className="flex gap-4 max-sm:text-xs">
            <button className="text-gray-600 ">Recruiter Login</button>
            <button className="bg-blue-600 text-white px-6 sm:px-9 py-2 rounded-full ">
              Login
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
