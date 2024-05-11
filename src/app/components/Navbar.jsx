"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

export const Navbar = () => {
  return (
    <nav className="fixed mx-auto border-[#33353F] border top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-9 py-4">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          LOGO
          {/* LOGO
          <div className=" w-[120px] h-[90px] rounded-full relative">
            <Image
              src="/images/hero-image2.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={100}
              height={100}
            />
            </div>
             */}
        </Link>

        <div className="menu md:block md:w-auto" id="navbar">
          <ul className="font-medium flex p-4 md:p-0  rounded-lg flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
