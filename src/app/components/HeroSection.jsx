"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 ">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="col-span-7 place-self-center place-items-center grid lg:place-items-start sm:text-left justify-self-start "
        >
          <h1 className="text-white max-w-2xl mb-4 lg:text-6xl lg:leading-normal text-4xl font-extrabold">
            <span className="text-transparent text-6xl bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I'm{" "}
            </span>{" "}
            <br></br>
            <TypeAnimation
              sequence={[
                "Pedro Passos",
                1000,
                "Undergraduate Student at USP",
                1000,
                "Computer Scientist",
                1000,
                "Software Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] mb-6 textl-lg lg:text-xl">
            This is a website built to showcase some of my personal projects and
            centralize informations about my experiences in software
            development.
          </p>
          <div>
            <button className="bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-200 text-white px-6 py-3 rounded-full mr-4">
              Hire Me
            </button>
            <button className="m-4 bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 px-1 py-1  text-white rounded-full">
              <a href="/Teamplate-Curriculo.pdf" download>
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                  Download CV
                </span>
              </a>
            </button>
          </div>
        </motion.div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="bg-[#181818] lg:w-[350px] lg:h-[350px] w-[250px] h-[250px] rounded-full relative"
          >
            <Image
              src="/images/FotoPerfil.jpeg"
              alt="profile picture"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
              width={300}
              height={300}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
