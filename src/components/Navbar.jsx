import { FaCheckCircle, FaGift, FaHome, FaUsers } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-white text-gray-700 shadow-sm flex justify-between items-center px-4 py-3 sm:px-6 md:justify-start md:space-x-10">
      <div className="flex justify-center lg:w-0 lg:flex-1">
        <NavLink
          to="/"
          className={`flex items-center ${
            location.pathname === "/" ? "active" : ""
          }`}
        >
          <span className="text-lg font-bold mr-2">
            <FaHome
              className={
                location.pathname === "/" ? "text-blue-500" : "text-gray-700"
              }
            />
          </span>
          <span className="hidden lg:inline">Home</span>
        </NavLink>
      </div>
      <div className="flex justify-center lg:justify-start lg:flex-1">
        <NavLink
          to="/team"
          className={`ml-8 font-medium hover:text-gray-900 flex items-center ${
            location.pathname === "/team" ? "active" : ""
          }`}
        >
          <span className="text-lg font-bold mr-2">
            <FaUsers
              className={
                location.pathname === "/team"
                  ? "text-blue-500"
                  : "text-gray-700"
              }
            />
          </span>
          <span className="hidden lg:inline">Team</span>
        </NavLink>
        <NavLink
          to="/gift-form"
          className={`ml-8 font-medium hover:text-gray-900 flex items-center ${
            location.pathname === "/gift-form" ? "active" : ""
          }`}
        >
          <span className="text-lg font-bold mr-2">
            <FaGift
              className={
                location.pathname === "/gift-form"
                  ? "text-blue-500"
                  : "text-gray-700"
              }
            />
          </span>
          <span className="hidden lg:inline">Gift</span>
        </NavLink>
        <NavLink
          to="/finished-challenges"
          className={`ml-8 font-medium hover:text-gray-900 flex items-center ${
            location.pathname === "/finished-challenges" ? "active" : ""
          }`}
        >
          <span className="text-lg font-bold mr-2">
            <FaCheckCircle
              className={
                location.pathname === "/finished-challenges"
                  ? "text-blue-500"
                  : "text-gray-700"
              }
            />
          </span>
          <span className="hidden lg:inline">Finished</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
