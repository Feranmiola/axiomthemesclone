import { SendIcon } from "lucide-react";
import React from "react";

const Subscribe = () => {
  return (
    <div className="flex flex-row items-center justify-center space-x-20 w-full py-20">
      <p className="text-[54px] font-medium leading-none">
        Subscribe for the
        <br />
        exclusive updates!
      </p>
      <div className="flex flex-row space-x-3">
        <input
          className="bg-white w-[420px] h-[48px] rounded-3xl shadow-md border px-3"
          type="email"
          placeholder="Enter Your Email Address"
        />
        <button className="flex flex-row items-center justify-center text-white space-x-2 px-8 py-3 rounded-3xl bg-blue-700 cursor-pointer">
          <div className="pr-2">
            <SendIcon color="white" />
          </div>
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
