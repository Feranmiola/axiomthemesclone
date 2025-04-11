import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="h-screen w-full">
      <div className="flex flex-col w-full h-screen homeBackground bg-[#E0E4E9] relative outline-none">
        <Navbar />
        <div className="h-full w-full items-center justify-center flex flex-col space-y-3">
          <p className="text-[72px] text-white font-bold leading-none text-center">
            Turning Creative Ideas
            <br />
            into Success
          </p>
          <p className="text-center text-base text-white">
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt <br />
            dolore magna aliqua quis nostrud exerc.
          </p>

          <button className="flex items-center justify-center px-7 py-3 font-semibold mt-5 mb-24 text-white bg-blue-400 hover:bg-blue-500 transition ease-in-out rounded-3xl cursor-pointer duration-200">
            Discover Now
          </button>
        </div>

        <div className="custom-shape-divider-bottom-1744318148">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Header;
