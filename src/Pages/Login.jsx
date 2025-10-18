import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiMail, FiUser, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import { Link, useNavigate } from "react-router";
import { Bounce, toast } from "react-toastify";
import Cookies from 'js-cookie';

const Login = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [Error, setError] = useState({
    nameError: "border-gray-300",
    passError: "border-gray-300",
  });

  const [showPassword, setShowPassword] = useState(false);
const navigate = useNavigate()
  // -=----------api ----------
  const options = {
    method: "POST",
    url: "https://api.freeapi.app/api/v1/users/login",
    headers: { accept: "application/json", "content-type": "application/json" },
    data: form,
  };

  const onSubmit = async (e) => {
    try {
      e.preventDefault();

      if (!form.username) {
        setError((prev) => ({ ...prev, nameError: "border-red-500" }));
      }

      if (!form.password) {
        setError((prev) => ({ ...prev, passError: "border-red-500" }));
      };
      axios.request(options)
      .then((res)=>{
        navigate('/')
        console.log(res.data.data.accessToken)
        Cookies.set('Authorization', res.data.data.accessToken)

      })
      .catch((err)=>{console.log(err)});

    }catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-sm p-8 space-y-6 bg-white rounded-2xl shadow-lg ring-1 ring-gray-200">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold text-gray-900">Login </h1>
        </div>

        <form onSubmit={onSubmit} className="space-y-6">
          {/* Username */}
          <label className="block">
            <span className="sr-only">Username</span>
            <div
              className={`flex items-center gap-2 px-3 py-2 rounded-md border ${Error.nameError} bg-gray-50`}
            >
              <FiUser className="text-gray-500" />
              <input
                onChange={(e) => {
                  setForm((prev) => ({ ...prev, username: e.target.value }));
                  setError((prev) => ({
                    ...prev,
                    nameError: "border-gray-300",
                  }));
                }}
                name="username"
                placeholder="Username"
                className="w-full bg-transparent outline-none text-gray-900 placeholder-gray-400"
              />
            </div>
          </label>

          {/* Password */}
          <label className="block">
            <span className="sr-only">Password</span>
            <div
              className={`flex items-center gap-2 px-3 py-2 rounded-md border ${Error.passError} bg-gray-50`}
            >
              <FiLock className="text-gray-500" />
              <input
                onChange={(e) => {
                  setForm((prev) => ({ ...prev, password: e.target.value }));
                  setError((prev) => ({
                    ...prev,
                    passError: "border-gray-300",
                  }));
                }}
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                className="w-full bg-transparent outline-none text-gray-900 placeholder-gray-400"
              />
              <button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                className="text-gray-500 p-1 rounded-md hover:bg-gray-100"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </label>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-black text-white font-medium hover:bg-gray-900"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <div className="text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link to={"/Register"} className="text-indigo-600 font-medium">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
