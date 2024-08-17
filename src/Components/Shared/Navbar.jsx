import { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { RiMenu2Line } from "react-icons/ri";
import "./style.css";
import { Link } from "react-router-dom";
import KnockMeIcon from "./KnockMe";
import { FaShoppingCart } from "react-icons/fa";
import LoginButton from "../Button/LoginButton";

const Navbar = () => {
  const hundleMenuBar = () => {
    const nav = document.getElementById("nav-item");
    nav.classList.add("active");
  };
  const removeMenu = () => {
    const nav = document.getElementById("nav-item");
    nav.classList.remove("active");
  };

  return (
    <>
      <div
        className={`md:px-12 py-2 px-8 sticky top-0 z-10 max-w-screen-xl shadow-sm bg-[#f3fafa] mx-auto flex justify-between items-center  `}
      >
        <div className="flex my-3 items-center gap-1">
          <img src="./vite.svg" className="" alt="" />
          {/* <KnockMeIcon /> */}
          <img className='w-36' src="/mslogo.png" alt="" />
        </div>

        <div className="flex items-center">
          <div id="nav-item" className={`md:flex items-center  `}>
            <div className="flex justify-between items-center md:mr-7 gap-2">
              {" "}
              <li className=" ">
                <Link to="/">
                  <a className="">Home</a>
                </Link>
              </li>
              <li className=" ">
                <Link to="/contact">
                  <a className=" ">Contact</a>
                </Link>
              </li>
            </div>

            <li>
              <Link to="/cart">
                <div className="indicator hidden md:flex">
                  <span className="indicator-item badge badge-secondary border-none bg-[#E90074]">
                    0
                  </span>
                  <button className="btn text-xl hover:text-[#E90074] btn-sm">
                    <FaShoppingCart />
                  </button>
                </div>
              </Link>
            </li>
            <h2 className="ml-4">
              <Link to="/login">
                <LoginButton />
              </Link>
            </h2>
            <div id="close" className="md:hidden absolute top-8 left-8">
              <a
                className="cursor-pointer font-semibold text-2xl text-[#1A2130]"
                onClick={removeMenu}
              >
                <IoMdClose />
              </a>
            </div>
          </div>

          {/* {user ? (
            <div className="dropdown dropdown-end mx-3">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full" title="">
                  <img
                    referrerPolicy="no-referrer"
                    alt="User Profile Photo"
                    src={user?.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-2 shadow-sm bg-base-100 rounded-box w-32"
              >
                <li className="mt-2">
                  <button
                    type="button"
                    onClick={async () => {
                      await logOut();
                      hundleClick();
                    }}
                    className="bg-gray-200 block text-center"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="md:ml-10 flex gap-2 mx-4">
              <Link to="/register">
                <button className="btn hidden md:flex bg-[#008080ef] hover:bg-[#008080] text-white">
                  Register
                </button>
              </Link>
              <Link to="/login">
                <button className="btn bg-[#008080ef] hover:bg-[#008080] text-white">
                  Login
                </button>
              </Link>
            </div>
          )} */}

          <div id="menu" className="md:hidden flex items-center gap-4">
            <li className="list-none">
              {" "}
              <Link to="/cart">
                <div className="indicator">
                  <span className="indicator-item badge badge-secondary border-none bg-[#E90074]">
                    0
                  </span>
                  <button className="btn text-xl hover:text-[#E90074] btn-sm">
                    <FaShoppingCart />
                  </button>
                </div>
              </Link>
            </li>
            <li
              onClick={hundleMenuBar}
              className="text-2xl cursor-pointer font-semibold list-none text-[#0C2D57]"
            >
              <RiMenu2Line />
            </li>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
