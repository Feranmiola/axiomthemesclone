import React from "react";
import DesignIcon from "./Icons/DesignIcon";
import UploadIcon from "./Icons/UploadIcon";

const CreativeAgency = () => {
  return (
    <div className="flex flex-row items-center justify-center w-full space-x-10">
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
