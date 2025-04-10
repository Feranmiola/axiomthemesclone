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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
