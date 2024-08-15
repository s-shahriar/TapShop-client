import React from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../Hooks/useAuth";

const NavBar = () => {
  const { logOut, user } = useAuth();

  const handleLogout = async () => {
    await logOut().then(() => {
      toast.success("Logout Successful", {
        position: "top-center",
      });
    });
  };

  const navOptions = [
    { to: "/categories", label: "Categories" },
    { to: "/brands", label: "Brands" },
  ];

  return (
    <div className="bg-primary">
      <div className="container navbar">
        <div className="navbar-start">
          {/* mobile menu */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden bg-teal-500 hover:bg-teal-600 px-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[55] p-2 shadow bg-white rounded-box w-52 space-y-1"
            >
              {!user && (
                <li>
                  <NavLink
                    to="/login"
                    className="block py-2 px-4 hover:bg-teal-500 hover:text-white"
                  >
                    Login
                  </NavLink>
                </li>
              )}
              {navOptions.map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      isActive
                        ? "block py-2 px-4 bg-teal-500 text-white rounded-lg"
                        : "block py-2 px-4 hover:bg-teal-500 hover:text-white rounded-lg"
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          {/* mobile menu ends */}

          {/* Company Logo Portion Starts */}
          <NavLink
            to="/"
            className="text-xl font-extrabold text-yellow-300 ml-4"
          >
            Tap Shop
          </NavLink>
        </div>
        {/* Company Logo Portion Ends */}

        {/* center position */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal px-1 text-white uppercase font-bold space-x-6">
            {!user && (
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 px-4 bg-teal-500 text-white rounded-lg"
                      : "block py-2 px-4 hover:bg-teal-500 hover:text-white rounded-lg"
                  }
                >
                  Home
                </NavLink>
              </li>
            )}
            {navOptions.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 px-4 bg-teal-500 text-white rounded-lg"
                      : "block py-2 px-4 hover:bg-teal-500 hover:text-white rounded-lg"
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        {/* center position ends */}

        {/* end position */}
        <div className="navbar-end space-x-1 md:space-x-4 lg:space-x-4">
          {user ? (
            <button
              onClick={handleLogout}
              className="text-white btn bg-teal-500 border-0 hover:bg-teal-600 hover:border-0"
            >
              Logout
            </button>
          ) : (
            <NavLink
              to="/login"
              className="text-white btn bg-teal-500 border-0 hover:bg-teal-600 hover:border-0"
            >
              Login
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
