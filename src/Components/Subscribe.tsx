import { SendIcon } from "lucide-react";
import React from "react";
import { Checkbox } from "./ui/checkbox";

const Subscribe = () => {
  return (
    <div className="flex flex-row items-center justify-center space-x-20 w-full py-20">
      <p className="text-[54px] font-medium leading-none">
        Subscribe for the
        <br />
        exclusive updates!
      </p>
      <div className="flex flex-row space-x-3">
        <div className="flex flex-col space-y-2">
          <input
            className="bg-white w-[420px] h-[48px] rounded-3xl shadow-md border px-3"
            type="email"
            placeholder="Enter Your Email Address"
          />
          <div className="flex flex-row items-center space-x-1">
            <Checkbox id="privacyPolicy" />

            <label htmlFor="privacyPolicy" className="font-light">
              I agree to the{" "}
              <span className="font-medium underline underline-offset-4 transition ease-in-out cursor-pointer opacity-60 hover:opacity-100">
                Privacy Policy
              </span>
              .
            </label>
          </div>
        </div>
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
