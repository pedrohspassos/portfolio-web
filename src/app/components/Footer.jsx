import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353f] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-end">
        <div className=" w-[70px] h-[70px] rounded-full relative">
          <Image
            src="/images/logo-marca.png"
            alt="hero image"
            className="absolute transform -translate-x-1/2 -translate-y-2 top-1/5 left-1/3 "
            width={200}
            height={200}
          />
        </div>
        <p className="text-slate-600 ml-auto">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
