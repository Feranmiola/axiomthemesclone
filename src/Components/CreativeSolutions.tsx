import React from "react";

const CreativeSolutions = () => {
  return (
    <div className="flex flex-row items-center justify-center w-full  py-10">
      <div className="flex flex-col space-y-3">
        <p>CREATIVE SOLUTIONS</p>
        <div className="flex flex-row space-x-28">
          <p className="text-[64px] font-medium leading-none">
            We make unique & <br />
            memorable brands
          </p>
          <div className="flex flex-col space-y-5">
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              <br />
              blanditiis praesentium voluptatum deleniti atque lorem in
              voluptate
              <br /> velit iusto odio dignissimos duci esse.
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              <br />
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa{" "}
              <br />
              quae.
            </p>

            <p className="font-semibold underline  cursor-pointer underline-offset-8 ">
              Read More
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreativeSolutions;
