import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function Login() {
  const { loginWithGoogle } = useAuth();

  // handle login with google
  const handleLoginWithGoogle = () => {
    loginWithGoogle();
  };

  return (
    <>
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
                className="px-4 py-2 bg-slate-600 text-white rounded font-medium text-base hover:bg-slate-700"
                type="button"
              >
                Login
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-center"
                type="button"
                onClick={handleLoginWithGoogle}
              >
                Login with Google
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
