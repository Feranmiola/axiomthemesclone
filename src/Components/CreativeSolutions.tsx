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

            <a
              href="mailto:info@email.com"
              className="text-black cursor-pointer hover:font-medium transition-all ease-in-out duration-200 relative group w-max"
            >
              Read More
              <span className="absolute left-0 bottom-0 h-[1px] bg-black w-full group-hover:w-0 transition-all duration-300 origin-left group-hover:transition-all group-hover:duration-300 group-hover:origin-left"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreativeSolutions;
