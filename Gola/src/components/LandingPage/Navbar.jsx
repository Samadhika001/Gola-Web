import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [nav, setnav] = useState(false);
  const [logo, setLogo] = useState(false);

  const handleNavbar = () => {
    setnav(!nav);
    setLogo(!logo);
  };

  return (
    <div
      className="flex w-full justify-between items-center
     h-20 px-4 absolute z-10 text-white"
    >
      <div>
        <img className="h-[100px] w-[100px]" src={Logo} alt="" srcSet=""/>
      </div>
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Destination</li>
        <li className="p-4">Travel</li>
        <li className="p-4">View</li>
        <li className="p-4">Book</li>
      </ul>
      <div className="ml-[50px] space-x-2 pl-[50px] font-bold">
        <Link to="/loginScreen">
          <button className="text-[#ffffff] h-[40px] w-[120px] rounded-lg ">
            Login
          </button>
        </Link>

        <Link to="/ChooseTypeScreen">
          <button className="text-[#09b600] bg-[#ffffff] h-[40px] w-[120px] rounded-lg text-white shadow-lg">
            Signup
          </button>
        </Link>
      </div>

      {/* Hamburger menu */}
      <div
        className="md:hidden z-10 cursor-pointer text-white"
        onClick={handleNavbar} // Corrected the function name here
      >
        {nav ? <AiOutlineClose size={30} /> : <HiOutlineMenuAlt4 size={30} />}
      </div>

      {/* Mobile menu dropdown */}

    </div>
  );
};

export default Navbar;
