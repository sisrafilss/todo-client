import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex justify-between px-20 py-4 text-white bg-slate-600 w-full">
      <div>
        <a className="text-xl font-semibold" href="#">
          Todo App
        </a>
      </div>

      <ul className="flex mx-auto ">
        <li className="mx-4">
          <Link
            to="/home"
            className="font-semibold hover:opacity-90 transition "
          >
            Home
          </Link>
        </li>
        <li className="mx-4">
          <Link
            to="/login"
            className="font-semibold hover:opacity-90 transition "
          >
            Login
          </Link>
        </li>
        <li className="mx-4">
          <Link
            to="/registration"
            className="font-semibold hover:opacity-90 transition "
          >
            Registration
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
