import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import Warning from "../Warning/Warning";

function Login() {
  const navigate = useNavigate();
  const { loginWithGoogle, loginUser, setLoading, authError, setAuthError } = useAuth();

  console.log(authError);

  // handle login with google
  const handleLoginWithGoogle = (navigate) => {
    setLoading(true);
    loginWithGoogle(navigate);
  };

  // handle login with email and password
  const handleLogin = (email, password, navigate) => {
    setLoading(true);
    loginUser(email, password, navigate);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => handleLogin(data?.email, data?.password, navigate);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4"
          >
            <h2 className="text-2xl font-semibold mb-6">Login</h2>
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
                {...register("email")}
                required
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
                {...register("password")}
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <input
                className="px-4 cursor-pointer py-2 bg-slate-600 text-white rounded font-medium text-base hover:bg-slate-700"
                type="submit"
                value="Login"
              />
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-center"
                type="button"
                onClick={() => handleLoginWithGoogle(navigate)}
              >
                Login with Google
              </button>
            </div>
          </form>

          {authError && <Warning authError={authError} setAuthError={setAuthError} />}

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
