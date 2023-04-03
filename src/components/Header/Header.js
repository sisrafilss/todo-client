import React from "react";

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
          <a className="font-semibold hover:opacity-90 transition " href="#">
            Home
          </a>
        </li>
        <li className="mx-4">
          <a className="font-semibold hover:opacity-90 transition " href="#">
            Login
          </a>
        </li>
        <li className="mx-4">
          <a className="font-semibold hover:opacity-90 transition " href="#">
            Registration
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
