import { Phone, PhoneCall, Search } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-screen flex flex-row p-10 items-center justify-between">
      <div className="flex flex-row space-x-18">
        <a href="/">
          <img
            src="https://res.cloudinary.com/debiu7z1b/image/upload/v1744309237/logo-inverse2-nocopyright_a9hhgt.webp"
            alt="logo"
            className="w-[150px] h-auto"
          />
        </a>

        <div className="flex flex-row space-x-6 items-center">
          <p className="relative text-white cursor-pointer text-sm group overflow-hidden">
            Home
            <span className="absolute left-0 bottom-0 h-[1px] bg-white w-0 group-hover:w-full transition-all duration-300 origin-left"></span>
          </p>
          <p className="relative text-white cursor-pointer text-sm group overflow-hidden">
            Pages
            <span className="absolute left-0 bottom-0 h-[1px] bg-white w-0 group-hover:w-full transition-all duration-300 origin-left"></span>
          </p>
          <p className="relative text-white cursor-pointer text-sm group overflow-hidden">
            Portfolio
            <span className="absolute left-0 bottom-0 h-[1px] bg-white w-0 group-hover:w-full transition-all duration-300 origin-left"></span>
          </p>
          <p className="relative text-white cursor-pointer text-sm group overflow-hidden">
            Blog
            <span className="absolute left-0 bottom-0 h-[1px] bg-white w-0 group-hover:w-full transition-all duration-300 origin-left"></span>
          </p>
          <p className="relative text-white cursor-pointer text-sm group overflow-hidden">
            Contacts
            <span className="absolute left-0 bottom-0 h-[1px] bg-white w-0 group-hover:w-full transition-all duration-300 origin-left"></span>
          </p>

          <div className="pl-5">
            <Search className="cursor-pointer" color="white" />
          </div>
        </div>
      </div>

      <div className="flex flex-row space-x-10">
        <div className="flex flex-row space-x-2 items-center">
          <div className="flex items-center justify-center w-[40px] h-[40px] bg-blue-950 rounded-full">
            <PhoneCall size={20} color="white" />
          </div>
          <p className="text-white text-xl font-bold">1 800 458 56 97</p>
        </div>

        <button className="flex items-center justify-center px-8 py-2 text-white bg-blue-700 hover:bg-blue-900 transition ease-in-out rounded-3xl cursor-pointer duration-200">
          Let's talk
        </button>
      </div>
    </div>
  );
};

export default Navbar;
