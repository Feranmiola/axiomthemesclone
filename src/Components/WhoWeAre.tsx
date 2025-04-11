import Image from "next/image";
import React from "react";

const WhoWeAre = () => {
  return (
    <div className="flex w-full flex-row items-center justify-center space-x-28 py-20">
      <div className="flex flex-col space-y-5">
        <p className="font-medium">WHO WE ARE</p>
        <p className="text-[64px] font-medium leading-none">
          We provide best
          <br />
          digital services
        </p>
        <p>
          Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit{" "}
          <br />
          aspernatur aut odit aut fugit sed quia.
        </p>

        <button className="flex items-center justify-center w-max px-7 py-3 font-semibold mt-5 mb-24 text-white bg-blue-400 hover:bg-blue-500 transition ease-in-out rounded-3xl cursor-pointer duration-200">
          Discover Now
        </button>
      </div>
      <div className="relative w-[600px] h-[560px]">
        <Image
          src="https://res.cloudinary.com/debiu7z1b/image/upload/v1744374067/h32r_cslda9.webp"
          alt="h32r"
          width={461}
          height={485}
          className="absolute top-0 right-0 z-0"
        />

        <Image
          src="https://res.cloudinary.com/debiu7z1b/image/upload/v1744374067/h32l_kgbity.webp"
          alt="h3r"
          width={412}
          height={413}
          className="absolute left-0 bottom-0 z-10"
        />
      </div>
    </div>
  );
};

export default WhoWeAre;
