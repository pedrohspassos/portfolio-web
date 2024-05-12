"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section className="transform -translate-y-" id="contact" ref={ref}>
      <motion.div
        variants={cardVariants}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="grid md:grid-cols-2 my-12 md:my-12 py-40 gap-4 relative"
      >
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-o blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
        <div className="z-10">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <h5 className="text-xl my-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">Let's Connect</h5>
          <p className="text-[#ADB7BE] mb-4 max-w-md">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            I'm currently looking for new opportunities, my inbox is always
            {/* eslint-disable-next-line react/no-unescaped-entities */} open. Whether you have a question or just want to say hi, 
            I'll get back to you!
          </p>
          <div className="socials flex flex-row gap-2">
            <Link
              href="https://github.com/pedrohspassos"
              target="_blank"
              
            >
              <Image src={GithubIcon} alt="Github Icon" />
            </Link>

            <Link
              href="https://www.linkedin.com/in/pedrohspassos/"
              target="_blank"
             
            >
              <Image src={LinkedinIcon} alt="Linkedin Icon" />
            </Link>
          </div>
        </div>

        <div>
          <form className="flex flex-col">
            <div className="mb-6">
              <label
                htmlFor="email"
                className="font-bold block mb-2 text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 "
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                required
                className="bg-[#181915] border border-[#33353F] placeholder-[#9CA2A9] mb-1 text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="user@email.com"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="subject"
                className="font-bold block mb-2 text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                required
                className="bg-[#181915] border border-[#33353F] placeholder-[#9CA2A9]  text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi..."
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="font-bold block mb-2 text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#181915] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-primary-400 to-secondary-600 hover:from-primary-500 hover:to-secondary-700 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default EmailSection;
