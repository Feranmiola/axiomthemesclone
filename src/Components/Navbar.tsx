"use client";
import { PhoneCall, Search, XIcon } from "lucide-react";
import React, { useState } from "react";
import { Sheet, SheetContent } from "./ui/sheet";

const Navbar = () => {
  const [isSearchSheetOpen, setIsSearchSheetOpen] = useState(false);
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

          <div onClick={() => setIsSearchSheetOpen(true)} className="pl-5">
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

      <Sheet open={isSearchSheetOpen} onOpenChange={setIsSearchSheetOpen}>
        <SheetContent side="top" className="w-full bg-[#131921] h-[400px]">
          <div className="flex flex-col w-full h-full items-center space-y-18 p-10">
            <div className="flex flex-row w-full items-center justify-between">
              <img
                src="https://res.cloudinary.com/debiu7z1b/image/upload/v1744309237/logo-inverse2-nocopyright_a9hhgt.webp"
                alt="logo"
                className="w-[150px] h-auto"
              />

              <div onClick={() => setIsSearchSheetOpen(false)}>
                <XIcon size={40} color="white" className="cursor-pointer" />
              </div>
            </div>

            <div className="flex w-[70%] pb-4 border-b border-b-[#20262D]">
              <div className="flex w-full flex-row items-center justify-between">
                <input
                  className="w-[70%] text-[#989CA9] text-2xl outline-none focus:outline-none "
                  placeholder="Type anything and hit enter"
                />

                <Search className="cursor-pointer" color="white" size={30} />
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Navbar;
