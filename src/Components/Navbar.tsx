"use client";
import { ChevronRight, PhoneCall, Search, XIcon } from "lucide-react";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isSearchSheetOpen, setIsSearchSheetOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [hoveredSubItem, setHoveredSubItem] = useState<string | null>(null);

  const menuItems = {
    Home: [
      { text: "Home 1", hasSubmenu: false },
      { text: "Home 2", hasSubmenu: false },
      {
        text: "Home 3",
        hasSubmenu: true,
        subItems: ["Sub 1", "Sub 2", "Sub 3"],
      },
    ],
    Pages: [
      { text: "About Us", hasSubmenu: false },
      { text: "Our Team", hasSubmenu: true, subItems: ["Team 1", "Team 2"] },
      {
        text: "Services",
        hasSubmenu: true,
        subItems: ["Service 1", "Service 2"],
      },
    ],
    Portfolio: [
      { text: "Grid View", hasSubmenu: false },
      { text: "Masonry", hasSubmenu: false },
      {
        text: "Projects",
        hasSubmenu: true,
        subItems: ["Project 1", "Project 2"],
      },
    ],
    Blog: [
      { text: "Blog Grid", hasSubmenu: false },
      { text: "Blog List", hasSubmenu: false },
      { text: "Categories", hasSubmenu: true, subItems: ["Cat 1", "Cat 2"] },
    ],
  };

  return (
    <div className="w-full flex flex-row p-10 items-center justify-between">
      <div className="flex flex-row space-x-18">
        <a href="/">
          <img
            src="https://res.cloudinary.com/debiu7z1b/image/upload/v1744309237/logo-inverse2-nocopyright_a9hhgt.webp"
            alt="logo"
            className="w-[150px] h-auto"
          />
        </a>

        <div className="flex flex-row space-x-6 items-center">
          {Object.keys(menuItems).map((item) => (
            <div
              key={item}
              className="relative group"
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => {
                setHoveredItem(null);
                setHoveredSubItem(null);
              }}
            >
              <div className="flex flex-col">
                <p className="relative text-white cursor-pointer text-sm overflow-hidden">
                  {item}
                  <span className="absolute left-0 bottom-0 h-[1px] bg-white w-0 group-hover:w-full transition-all duration-300 origin-left"></span>
                </p>

                {hoveredItem === item && (
                  <>
                    <div className="absolute top-full left-0 h-4 w-full" />
                    <div className="absolute top-[calc(100%+1rem)] left-0 w-[200px] bg-[#070334] rounded-2xl py-4 z-50">
                      {menuItems[item as keyof typeof menuItems].map(
                        (menuItem) => (
                          <div
                            key={menuItem.text}
                            className="relative"
                            onMouseEnter={() =>
                              menuItem.hasSubmenu &&
                              setHoveredSubItem(menuItem.text)
                            }
                            onMouseLeave={() => setHoveredSubItem(null)}
                          >
                            <a
                              href="#"
                              className="flex items-center justify-between text-[#9196A5] hover:text-white py-2 px-4 transition-colors duration-200"
                            >
                              {menuItem.text}
                              {menuItem.hasSubmenu && (
                                <ChevronRight
                                  size={16}
                                  className="text-[#9196A5]"
                                />
                              )}
                            </a>

                            {hoveredSubItem === menuItem.text &&
                              menuItem.hasSubmenu && (
                                <div className="absolute top-0 left-full w-[200px] bg-[#070334] rounded-2xl p-4">
                                  {menuItem.subItems?.map((subItem) => (
                                    <a
                                      key={subItem}
                                      href="#"
                                      className="block text-[#9196A5] hover:text-white py-2 transition-colors duration-200"
                                    >
                                      {subItem}
                                    </a>
                                  ))}
                                </div>
                              )}
                          </div>
                        )
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}

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
          <a
            href="tel:+18408412569"
            className="flex items-center justify-center w-[40px] h-[40px] bg-blue-950 rounded-full"
          >
            <PhoneCall size={20} color="white" />
          </a>
          <a
            href="tel:+18408412569"
            className="text-white text-xl font-bold cursor-pointer"
          >
            1 800 458 56 97
          </a>
        </div>

        <button className="flex items-center justify-center px-8 py-2 text-white bg-blue-700 hover:bg-blue-900 transition ease-in-out rounded-3xl cursor-pointer duration-200">
          Let's talk
        </button>
      </div>

      <AnimatePresence>
        {isSearchSheetOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-50"
              onClick={() => setIsSearchSheetOpen(false)}
            />
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 left-0 w-full bg-[#131921] h-[400px] z-50"
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col w-full h-full items-center space-y-18 p-10"
              >
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

                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: 0.3 }}
                  className="flex w-[70%] pb-4 border-b border-b-[#20262D]"
                >
                  <div className="flex w-full flex-row items-center justify-between">
                    <input
                      className="w-[70%] text-[#989CA9] text-2xl outline-none focus:outline-none bg-transparent"
                      placeholder="Type anything and hit enter"
                    />

                    <Search
                      className="cursor-pointer"
                      color="white"
                      size={30}
                    />
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
