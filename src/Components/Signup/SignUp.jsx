import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaFacebook, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import LoginBackground from "../Login/LoginBackground";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";

const SignupPage = () => {
  const { createUser, signUpWithFacebook, loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data) => {
    console.log(data);
    // Handle signup logic here
    try {
      const result = createUser(data.email, data.password);
      console.log(result);
      navigate("/");
      toast.success("Successfully create account");
    } catch (err) {
      console.log(err.message);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // sign In facebook
  const signInWithFacebook = async () => {
    try {
      await signUpWithFacebook();
      navigate("/");
      toast.success("successfully login");
    } catch (err) {
      console.log(err.message);
    }
  };

  // sign in Github 
  const signInWithGoogle = async () => {
    try{
      await loginWithGoogle();
      navigate("/");
      toast.success("Successfully Login");
    } catch(err){
      console.log(err.message);
    }
  }

  return (
    <div className="relative max-w-7xl mx-auto w-screen h-screen overflow-hidden">
      <LoginBackground />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="bg-white px-8 py-5 rounded-lg max-w-[400px] w-full shadow-lg">
          <div className="flex flex-col justify-center items-center">
            <img src="./vite.svg" className="w-12" alt="" />
            <h2 className="text-2xl  font-semibold font-sant mb-3">
              Please Signup!{" "}
            </h2>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label
                className="block text-start text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.name ? "border-red-500" : ""
                }`}
                id="name"
                type="text"
                placeholder="Name"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <p className="text-red-500 text-xs italic">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* <div className="mb-3">
              <label className="block text-start text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                Image
              </label>
              <input
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.image ? 'border-red-500' : ''
                }`}
                id="image"
                type="file"
                {...register('image', { required: 'Image is required' })}
              />
              {errors.image && (
                <p className="text-red-500 text-xs italic">{errors.image.message}</p>
              )}
            </div> */}

            <div className="mb-3">
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

            <div className="mb-4 relative">
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

            <div className="flex items-center justify-between">
              <button
                className="bg-[#E90074] w-full hover:bg-[#d70064] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign Up
              </button>
            </div> 
          </form>
          <div className="flex justify-between mt-6">
              <button
                  onClick={signInWithFacebook}
                className="flex items-center bg-[#0F67B1] hover:bg-[#1d5c8f] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mr-2"
              >
                <FaFacebook className="mr-2" />
                Facebook
              </button>
              <button
                  onClick={signInWithGoogle}
                className="flex items-center bg-[#FF4191] hover:bg-[#E90074] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full ml-2"
              >
                <FaGoogle className="mr-2" />
                Google
              </button>
            </div>
          <p className="text-start text-sm mt-4">
            Already have an account? Please{" "}
            <Link
              to="/login"
              className="cursor-pointer hover:underline text-[#E90074]"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
