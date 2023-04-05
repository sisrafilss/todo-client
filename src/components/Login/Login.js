import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";

function Login() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md">
          <form className="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Login
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-center"
                type="button"
              >
                Login with Google
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="#fff"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-google ml-2"
                >
                  <path d="M21.6,10.5H12v3.9h5.4c-.6,2.1-2.4,3.6-4.5,3.6c-.3,0-.6,0-.9-.1v4c1.1,.3 2.3,.5 3.5,.5c8.4,0 15.1,-7 15.1,-15.6c0,-1-.1,-2-.2,-3z"></path>
                  <path d="M12,21a9,9 0 1,0 -9,-9a9,9 0 0,0 9,9z"></path>
                </svg>
              </button>
              
            </div>
          </form>
          <p className="text-center text-gray-500 text-xs">
            Don't have an account?{" "}
            <Link
              to="/registration"
              className="text-indigo-500 hover:text-indigo-600"
            >
              Registration
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
