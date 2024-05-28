import React from "react";
import UIClogo from "../assets/images/UIC.png";


export default function Header() {
  return (
    <nav className="max-w-[1080px] mx-auto flex items-center xl:px-0 px-7 justify-between relative z-10">

      {/* logo */}
      <a href="/" className="cursor-pointer py-7 pr-7">
        <img src={UIClogo} className="logo" alt="UIC Logo" />
      </a>

      <ul className=" hidden sm:flex md:flex xl:flex gap-5 font-mullish text-white">
        <li className=" font-semibold py-7 text-white hover:text-[#928f96] cursor-pointer transition-all duration-200 relative group">
          <a href="#">HOME</a>
          <div className="absolute bottom-5 w-full h-1 bg-deepBlue hidden group-hover:block transition-all duration-200"></div>
        </li>
        <li className=" font-semibold py-7 text-white hover:text-[#928f96] cursor-pointer transition-all duration-200 relative group">
          <a href="#about">ABOUT</a>
          <div className="absolute bottom-5 w-full h-1 bg-deepBlue hidden group-hover:block transition-all duration-200"></div>
        </li>
        <li className=" font-semibold py-7 text-white hover:text-[#928f96]  cursor-pointer transition-all duration-200 relative group">
          <a href="#speakers">SPEAKERS</a>
          <div className="absolute bottom-5 w-full h-1 bg-deepBlue hidden group-hover:block transition-all duration-200"></div>
        </li>
        <li className=" font-semibold py-7 text-white hover:text-[#928f96]  cursor-pointer transition-all duration-200 relative group">
          <a href="#jobs">JOBS</a>
          <div className="absolute bottom-5 w-full h-1 bg-deepBlue hidden group-hover:block transition-all duration-200"></div>
        </li>
        <li className=" font-semibold py-7 text-white hover:text-[#928f96]  cursor-pointer transition-all duration-200 relative group">
          <a href="#industry">INDUSTRY</a>
          <div className="absolute bottom-5 w-full h-1 bg-deepBlue hidden group-hover:block transition-all duration-200"></div>
        </li>
      </ul>

      <div className="sm:hidden block ">
        <i className="fa-solid fa-bars text-[30px] text-white"></i>
      </div>

      <style jsx="Boolean">{`
        @media (max-width: 768px) {
          .logo {
            width: 100px; /* Adjust as needed for smaller screens */
          }
        }
        @media (min-width: 769px) {
          .logo {
            width: 130px; /* Adjust as needed for larger screens */
          }
        }
      `}</style>
    </nav>
  );
}
