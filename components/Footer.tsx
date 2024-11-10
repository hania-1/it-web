import React from "react";
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center text-center mt-20 space-y-6 p-8">
      <div className="text-3xl font-bold text-center font-serif m-4">
        Thanks for visiting! Keep building and learning.
      </div>
      <div className="text-1xl font-light text-white">
        The journey of a thousand lines of code begins with a single click.
      </div>
      <div className="flex gap-6 justify-center">
        <div className="flex items-center gap-x-2">
          <IoLogoGithub size={24} />
          <Link href="https://github.com/hania-1" rel="noopener noreferrer" className="hover:underline hover:text-gray-700 transition">
            Github
          </Link>
        </div>
        <div className="flex items-center gap-x-2">
          <FaLinkedin size={24} />
          <Link href="https://www.linkedin.com/in/hania-rizwan-a575072b6/" rel="noopener noreferrer" className="hover:underline hover:text-gray-700 transition">
            LinkedIn
          </Link>
        </div>
      </div>
      <div className="mt-4">
        <Link href="https://portfolio-website-coral-beta-21.vercel.app/">
          <button className="bg-[#e7dbdb] text-black px-6 py-2 rounded-lg hover:bg-[#a75050] transition duration-300 transform hover:scale-105">
            Explore More Projects on my Portfolio
          </button>
        </Link>
      </div>
     <div className="text-sm font-light text-black">&copy; Hania. all right reserved</div>
    </footer>
  );
};

export default Footer;
