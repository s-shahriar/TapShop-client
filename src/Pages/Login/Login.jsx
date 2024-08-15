import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
  useEffect(() => {
    document.title = "Login";
  }, []);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";

  const { googleLogin, signIn, setLoading } =
    useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    signIn(email, password)
      .then((result) => {
        if (result.user) {
          toast.success("Logged in");
          //window.location.href = from;
          navigate(from);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Wrong Credentials");
        setLoading(false);
      });
  };

  const googleHandler = () => {
    googleLogin()
      .then((result) => {
        if (result.user) {
          toast.success("Logged in");
          window.location.href = from;
        }
      })
      .catch((error) => {
        toast.error("Something went wrong...");
        setLoading(false);
      });
  };

  return (
    <div className="my-8 w-full max-w-md p-8 space-y-3 rounded-xl bg-[#0f172b] text-white mx-auto">
      <h1 className="text-2xl font-bold text-center">Login</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-1 text-sm ">
          <label htmlFor="email" className="block text-white">
            Email Address
          </label>
          <input
            {...register("email", { required: true })}
            type="text"
            name="email"
            id="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600"
          />
          {errors.email && (
            <span className="text-red-400">This field is required</span>
          )}
        </div>

        <div className="space-y-1 text-sm relative">
          <label htmlFor="password" className="block  text-white">
            Password
          </label>
          <input
            {...register("password", { required: true })}
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600"
          />
          {errors.password && (
            <span className="text-red-400">This field is required</span>
          )}
          <button
            type="button"
            className="absolute top-[32px] right-0 mt-2 mr-4 text-gray-600"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-5 h-5 fill-current"
              >
                <path
                  fillRule="evenodd"
                  d="M23.654 11.315c-1.12-1.423-2.687-2.674-4.645-3.765-2.227-1.248-4.784-1.996-7.805-1.996-3.02 0-5.578.748-7.805 1.996-1.959 1.091-3.525 2.342-4.645 3.765-.17.216-.17.53 0 .746 1.12 1.423 2.687 2.674 4.645 3.765 2.227 1.248 4.784 1.996 7.805 1.996 3.02 0 5.578-.748 7.805-1.996 1.959-1.091 3.525-2.342 4.645-3.765.17-.216.17-.53 0-.746zM11.998 19c-2.533 0-4.833-.617-6.581-1.654-.174-.105-.344-.23-.505-.374-.41-.354-.77-.814-1.084-1.386-.319-.576-.486-1.24-.486-1.986s.167-1.41.486-1.986c.314-.572.674-1.032 1.084-1.386.161-.145.331-.27.505-.375 1.748-1.037 4.048-1.654 6.581-1.654s4.833.617 6.581 1.654c.174.105.344.23.505.375.41.354.77.814 1.084 1.386.319.576.486 1.24.486 1.986s-.167 1.41-.486 1.986c-.314.572-.674 1.032-1.084 1.386-.161.145-.331.27-.505.375-1.748 1.037-4.048 1.654-6.581 1.654zm0-13c-1.935 0-3.518 1.575-3.518 3.5s1.583 3.5 3.518 3.5c1.934 0 3.518-1.575 3.518-3.5s-1.584-3.5-3.518-3.5z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-5 h-5 fill-current"
              >
                <path
                  fillRule="evenodd"
                  d="M23.654 11.315c-1.12-1.423-2.687-2.674-4.645-3.765-2.227-1.248-4.784-1.996-7.805-1.996-3.02 0-5.578.748-7.805 1.996-1.959 1.091-3.525 2.342-4.645 3.765-.17.216-.17.53 0 .746 1.12 1.423 2.687 2.674 4.645 3.765 2.227 1.248 4.784 1.996 7.805 1.996 3.02 0 5.578-.748 7.805-1.996 1.959-1.091 3.525-2.342 4.645-3.765.17-.216.17-.53 0-.746zM11.998 19c-2.533 0-4.833-.617-6.581-1.654-.174-.105-.344-.23-.505-.374-.41-.354-.77-.814-1.084-1.386-.319-.576-.486-1.24-.486-1.986s.167-1.41.486-1.986c.314-.572.674-1.032 1.084-1.386.161-.145.331-.27.505-.375 1.748-1.037 4.048-1.654 6.581-1.654s4.833.617 6.581 1.654c.174.105.344.23.505.375.41.354.77.814 1.084 1.386.319.576.486 1.24.486 1.986s-.167 1.41-.486 1.986c-.314.572-.674 1.032-1.084 1.386-.161.145-.331.27-.505.375-1.748 1.037-4.048 1.654-6.581 1.654zm0-13c-1.935 0-3.518 1.575-3.518 3.5s1.583 3.5 3.518 3.5c1.934 0 3.518-1.575 3.518-3.5s-1.584-3.5-3.518-3.5z"
                />
                <path
                  fillRule="evenodd"
                  d="M11.998 16c-1.935 0-3.518-1.575-3.518-3.5s1.583-3.5 3.518-3.5c1.934 0 3.518 1.575 3.518 3.5s-1.584 3.5-3.518 3.5zM11.998 10c-1.366 0-2.518 1.102-2.518 2.5s1.152 2.5 2.518 2.5c1.366 0 2.518-1.102 2.518-2.5s-1.152-2.5-2.518-2.5z"
                />
              </svg>
            )}
          </button>
        </div>
        <button className="block w-full p-3 text-center rounded-sm text-gray-50 bg-slate-600">
          Sign in
        </button>
      </form>

      <div className="flex items-center pt-4 space-x-1">
        <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
        <p className="px-3 text-sm text-white">Login with social accounts</p>
        <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
      </div>
      <div className="flex justify-center space-x-4">
        <button
          aria-label="Log in with Google"
          className="p-3 rounded-sm"
          onClick={googleHandler}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-5 h-5 fill-current"
          >
            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
          </svg>
        </button>
      </div>
      <p className="text-xs text-center sm:px-6 text-white">
        Don't have an account?
        <Link
          rel="noopener noreferrer"
          to={"/register"}
          className="underline text-white ml-2"
        >
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default Login;
