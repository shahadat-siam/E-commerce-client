 
import {  FaInstagram,  FaFacebookF, FaLinkedinIn, FaPinterestP } from 'react-icons/fa';
import KnockMeLogoText from './KnockMe';

const Footer = () => {
  return (
    <footer className="bg-[#f3fafa] px-16 pt-16 pb-8 text-[#1A1A1A] ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1: Website Name/Logo */}
        <div className='flex flex-col justify-start items-start text-start'>
        <div className="flex mb-4 -mt-2 items-center justify-center gap-1">
          <img src="./vite.svg" className="" alt="" />
          {/* <KnockMeLogoText/> */}
          <img className='w-32' src="/mslogo.png" alt="" />
        </div>
           <div className='space-y-2'>
                <p>For amazing products.</p>
                <p>Address: 16 Road Mirpur-1</p>
                <p>Phone: +880 477837-45</p>
           </div>
        </div>

        {/* Column 2: Useful Links */}
        <div className=' flex flex-col text-start md:pl-10'>
          <h3 className="text-xl font-bold mb-4">Useful Links</h3>
          <ul className="space-y-2 ">
            <li><a href="#" className="hover:text-gray-400">Home</a></li>
            <li><a href="#" className="hover:text-gray-400">Shop</a></li>
            <li><a href="#" className="hover:text-gray-400">About Us</a></li>
            <li><a href="#" className="hover:text-gray-400">Contact Us</a></li>
          </ul>
        </div>

        {/* Column 3: Categories */}
        <div className='flex flex-col text-start md:pl-10'>
          <h3 className="text-xl font-bold mb-4">Categories</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-400">Electronics</a></li>
            <li><a href="#" className="hover:text-gray-400">Fashion</a></li>
            <li><a href="#" className="hover:text-gray-400">Home & Garden</a></li>
            <li><a href="#" className="hover:text-gray-400">Sports</a></li>
          </ul>
        </div>

        {/* Column 4: Join Our Newsletter */}
        <div className='flex flex-col text-start '>
          <h3 className="text-xl font-bold mb-4">Join Our Newsletter</h3>
          <p className="mb-4">Get the latest updates and offers.</p>
          <form className="flex">
            <input
              type="email"
              className="p-2 rounded-l   text-[#1A1A1A] border border-[#e900753a] outline-none focus:border-[#e90075a4] flex-grow"
              placeholder="Enter your email"
            />
            <button className="p-2 bg-[#E90074] text-white rounded-r hover:[#E90074]">Subscribe</button>
          </form>
          <div className='flex mt-5 gap-3 items-center'>
            <p className='bg-white p-3 rounded-full shadow-md text-[#1A1A1A] cursor-pointer duration-300 hover:bg-[#E90074] hover:text-[white]'><FaFacebookF /></p>
            <p className='bg-white p-3 rounded-full shadow-md text-[#1A1A1A] cursor-pointer duration-300 hover:bg-[#E90074] hover:text-[white]'><FaInstagram /></p>
            <p className='bg-white p-3 rounded-full shadow-md text-[#1A1A1A] cursor-pointer duration-300 hover:bg-[#E90074] hover:text-[white]'><FaLinkedinIn /></p>
            <p className='bg-white p-3 rounded-full shadow-md text-[#1A1A1A] cursor-pointer duration-300 hover:bg-[#E90074] hover:text-[white]'><FaPinterestP/></p>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center border-t-[1px] border-gray-200 pt-6 text-gray-500">
        &copy; {new Date().getFullYear()} MS Shop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
