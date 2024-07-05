import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import LoginBackground from "./LoginBackground";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const rememberMe = watch("rememberMe", false);

  const onSubmit = (data) => {
    console.log(data);
    // Handle login logic here
    if (rememberMe) {
      localStorage.setItem("rememberMe", JSON.stringify(data));
    } else {
      localStorage.removeItem("rememberMe");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <LoginBackground />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg max-w-[400px] w-full shadow-lg">
            <div className="flex flex-col justify-center items-center">
            <img src="./vite.svg" className="w-12" alt="" />
            <h2 className="text-2xl  font-semibold font-sant mb-4">Please Login! </h2>
            </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label
                className="block text-start text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.email ? "border-red-500" : ""
                }`}
                id="email"
                type="email"
                placeholder="Email"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="text-red-500 text-xs italic">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="mb-6 relative">
              <label
                className="block text-start text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.password ? "border-red-500" : ""
                }`}
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="************"
                {...register("password", { required: "Password is required" })}
              />
              <div className="absolute inset-y-0 top-4 right-0 pr-3 flex items-center text-sm leading-5">
                <button type="button" onClick={togglePasswordVisibility}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-xs italic">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="flex mb-4   items-center justify-between">
              <div className=" ">
                <label
                  className="  text-gray-700 text-sm font-bold mb-2"
                  htmlFor="rememberMe"
                >
                  <input
                    className="mr-2 leading-tight"
                    type="checkbox"
                    id="rememberMe"
                    {...register("rememberMe")}
                  />
                  Remember Me
                </label>
              </div>
              <div>
                <a
                  className="  font-bold text-sm text-[#FF4191] hover:text-[#E90074]"
                  href="#"
                >
                  Forgot Password?
                </a>
              </div>
            </div>

            <div>
              <button
                className="bg-[#f82e93] hover:bg-[#E90074] w-full text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                 Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
