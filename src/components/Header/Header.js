import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();

  const handleLogOut = () => {
    logOut();
  };

  return (
    <nav className="flex fixed top-0 justify-between px-20 py-4 text-white bg-slate-600 w-full">
      <div>
        <Link to="/" className="text-xl font-semibold">
          Todo App
        </Link>
      </div>

      <ul className="flex mx-auto ">
        <li className="mx-4">
          <Link to="/" className="font-semibold hover:opacity-90 transition ">
            Home
          </Link>
        </li>
        {user?.email ? (
          <li className="mx-4">
            <span
              className="font-semibold hover:opacity-90 transition cursor-pointer"
              onClick={handleLogOut}
            >
              Logout
            </span>
          </li>
        ) : (
          <li className="mx-4">
            <Link
              to="/login"
              className="font-semibold hover:opacity-90 transition "
            >
              Login
            </Link>
          </li>
        )}
        <li className="mx-4">
          <span className="font-semibold hover:opacity-90 transition ">
            Logged in as <span className="text-green-400">{user?.displayName}</span>
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
