import React from "react";
import DesignIcon from "./Icons/DesignIcon";
import UploadIcon from "./Icons/UploadIcon";
import Image from "next/image";

const CreativeAgency = () => {
  return (
    <div className="flex flex-row items-center justify-center w-full space-x-28 py-10">
      <div className="relative w-[600px] h-[600px]">
        <Image
          src="https://res.cloudinary.com/debiu7z1b/image/upload/v1744362475/h3l_uytasz.webp"
          alt="h3l"
          width={412}
          height={413}
          className="absolute left-0 top-0 z-0"
        />

        <Image
          src="https://res.cloudinary.com/debiu7z1b/image/upload/v1744362474/h3r_ggqhl3.webp"
          alt="h3r"
          width={416}
          height={485}
          className="absolute right-0 bottom-0 z-10"
        />
      </div>

      <div className="flex flex-col space-y-8">
        <p className="font-medium">CREATIVE AGENCY</p>
        <p className="text-[64px] font-medium leading-none">
          We help your
          <br />
          business grow
        </p>
        <p>
          Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas <br />
          sit aspernatur aut odit aut fugit, sed quia.
        </p>

        <div className="flex flex-row items-center space-x-2">
          <DesignIcon />

          <div className="flex flex-col space-y-3">
            <p className="text-2xl font-semibold">Creative Design</p>
            <p>Natus error sit voluptatem accus antium doloremque.</p>
          </div>
        </div>
        <div className="flex flex-row items-center space-x-2">
          <UploadIcon />

          <div className="flex flex-col space-y-3">
            <p className="text-2xl font-semibold">Endless possibilities</p>
            <p>Sit voluptatem accus antium doloremque laudan.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreativeAgency;
