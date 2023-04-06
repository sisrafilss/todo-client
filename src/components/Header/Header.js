import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import "./Header.css";

const Header = () => {
  const [visible, setVisible] = useState(false);
  const { user, logOut } = useAuth();

  const handleLogOut = () => {
    logOut();
  };

  // handle mobile menu
  const handleMobileMenu = () => {
    setVisible(!visible);
  };

  return (
    <nav className="flex fixed top-0 justify-between md:px-20 px-6 py-4 text-white bg-slate-600 w-full">
      <div>
        <Link to="/" className="text-xl font-semibold">
          Todo App
        </Link>
      </div>

      <ul
        className={`${
          visible ? "-right-0" : "-right-80"
        } md:flex md:mx-auto md:flex-row flex-col md:w-auto md:h-auto md:static md:pt-0 w-80  bg-slate-600 shadow-sm h-screen absolute top-0 pl-4 pt-16 sm:hidden menu-transition`}
      >
        <XIcon
          onClick={handleMobileMenu}
          className="h-6 w-6 text-white ml-4 mb-4 -mt-12 hover:opacity-90 cursor-pointer md:hidden"
          aria-hidden="true"
        />

        <li className="mx-4 mb-3">
          <Link
            to="/"
            className="font-semibold hover:opacity-90 transition text-green-400"
          >
            Home
          </Link>
        </li>
        {user?.email ? (
          <li className="mx-4  mb-3">
            <span
              className="font-semibold hover:opacity-90 transition cursor-pointer"
              onClick={handleLogOut}
            >
              Logout
            </span>
          </li>
        ) : (
          <li className="mx-4  mb-3">
            <Link
              to="/login"
              className="font-semibold hover:opacity-90 transition "
            >
              Login
            </Link>
          </li>
        )}
        <li className="mx-4  mb-3">
          <span className="font-semibold hover:opacity-90 transition ">
            Logged in as{" "}
            <span className="text-green-400">{user?.displayName}</span>
          </span>
        </li>
      </ul>

      <MenuIcon
        onClick={handleMobileMenu}
        className="md:hidden flex h-6 w-6 text-gray-400"
        aria-hidden="true"
      />
    </nav>
  );
};

export default Header;
