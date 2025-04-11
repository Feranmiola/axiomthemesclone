import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-[600px] relative flex items-center justify-center bg-[#080E17]">
      <div className="custom-shape-divider-top-1744380682">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>

      <div className="flex w-full max-w-[80%] flex-col items-center h-full justify-between py-10 pt-[200px]">
        <div className="w-full flex items-start justify-between">
          <div className="flex flex-col space-y-5">
            <p className="font-bold text-white text-xl">Office</p>
            <div className="flex flex-col space-y-2">
              <p className="text-[#8F919F]">
                Germany — <br />
                785 15h Street, Office 478 <br />
                Berlin, De 81566
              </p>
              <a
                href="mailto:info@email.com"
                className="text-[#8F919F] underline underline-offset-4 hover:text-white transition-colors ease-in-out duration-200"
              >
                info@email.com
              </a>
              <a
                href="tel:+18408412569"
                className="text-[#8F919F] hover:text-white transition-colors ease-in-out duration-200 pt-5 cursor-pointer"
              >
                +1 840 841 25 69
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
