 
import { IoMdClose } from "react-icons/io";
import { RiMenu2Line } from "react-icons/ri";
import "./style.css";
import { Link } from "react-router-dom"; 
import { FaShoppingCart } from "react-icons/fa";
import LoginButton from "../Button/LoginButton";
import useAuth from "../hooks/useAuth"; 
import useRole from "../hooks/useRole";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { FaSquarePlus } from "react-icons/fa6";

const Navbar = () => {
  const {user, logOut} = useAuth() 
  const [role] = useRole() 
  const hundleMenuBar = () => {
    const nav = document.getElementById("nav-item");
    nav.classList.add("active");
  };
  const removeMenu = () => {
    const nav = document.getElementById("nav-item");
    nav.classList.remove("active");
  };

  // logout
  const hundleLogOut = async () =>{
    logOut()
  }

  return (
    <>
      <div
        className={`md:px-12 py-2 px-8 sticky top-0 z-10 max-w-screen-xl shadow-sm bg-[#f3fafa] mx-auto flex justify-between items-center  `}
      >
        <Link to='/'>
        <div className="flex my-3 cursor-pointer items-center gap-1">
          <img src="./vite.svg" className="" alt="" />
          {/* <KnockMeIcon /> */}
          <img className='w-36' src="/mslogo.png" alt="" />
        </div>
        </Link>

        <div className="flex items-center">
          <div id="nav-item" className={`md:flex items-center  `}>
            {
              role === 'Admin' ? <div>
               <ul className="md:flex pr-7 items-center gap-4">
                  <li className="mt-2">
                    <Link to="/add-prodact"> <a className="flex items-center gap-2"><FaSquarePlus /> Product</a></Link> 
                  </li>
                  <li className="mt-2">
                    <Link> <a className="flex items-center gap-2"><TbLayoutDashboardFilled />Dashboard</a></Link> 
                  </li>
               </ul>
             </div> :  <div>
                <div className="md:flex justify-between items-center md:mr-4 gap-2">
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
              <li className="mt-3 cart">
            <Link to="/cart">
                <div className="indicator ">
                  <span className="indicator-item badge badge-secondary text-[#E90074] border-none bg-transparent">
                    0
                  </span>
                  <button className="px-1 py-1 text-[17px] hover:text-[#E90074]">
                    <FaShoppingCart />
                  </button>
                </div> 
              </Link>
            </li> 
            </div>  
            </div>  
            } 
            { user  ?  <div className="dropdown  dropdown-end mx-1">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full" title={user?.displayName}>
                  <img
                    referrerPolicy="no-referrer"
                    alt="User Profile Photo"
                    src= {user.photoURL == null ? "./profile.png" : user.photoURL }
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-2 shadow-sm bg-base-100 rounded-box w-36"
              >
                <li className="mt-2">
                  <button
                    type="button"
                    // onClick={async () => {
                    //   await logOut();
                    //   hundleClick();
                    // }}
                    onClick={hundleLogOut}
                    className="bg-gray-200 block text-center"
                  >
                    Logout
                  </button>
                </li> 
              </ul>
            </div>   : 
            <h2 className="ml-2">
              <Link to="/login">
                <LoginButton />
              </Link>
            </h2> }
            <div id="close" className="md:hidden absolute top-8 left-8">
              <a
                className="cursor-pointer font-semibold text-2xl text-[#1A2130]"
                onClick={removeMenu}
              >
                <IoMdClose />
              </a>
            </div>
          </div>
 
           {/* {user && (
            <div className="dropdown  dropdown-end mx-3">
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
                    // onClick={async () => {
                    //   await logOut();
                    //   hundleClick();
                    // }}
                    className="bg-gray-200 block text-center"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div> 
          )}  */}

          <div id="menu" className="md:hidden flex items-center gap-5">
          {role != 'Admin' &&  <li className="mt-3 list-none">
              <Link to="/cart">
                <div className="indicator ">
                  <span className="indicator-item text-[12px] badge badge-secondary text-[#E90074] border-none bg-transparent">
                    0
                  </span>
                  <button className="px-1 py-1 text-[17px] hover:text-[#E90074]">
                    <FaShoppingCart />
                  </button>
                </div> 
              </Link>
            </li>  }
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
