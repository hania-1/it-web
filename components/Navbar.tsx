"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

const navLinks = [
  { title: "Explore", path: "#explore" },
  { title: "Languages", path: "#languages" },
  { title: "Development", path: "#development" },
  { title: "Artificial", path: "#artificial" },
  { title: "Project", path: "#project" },
  { title: "Quiz", path: "#quiz" },
  { title: "Tech", path: "#tech" },
  { title: "News", path: "#news" },
  { title: "Chunks", path: "#chunks" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false); // state to manage navbar visibility

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-gradient-to-b from-red-300 to-transparent text-white">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        {/* Logo and website name */}
        <Link href="/" className="text-xl md:text-2xl text-white font-serif">
          <Image
            src="/pic-22.png"
            alt="Logo"
            width={60} // smaller width
            height={60} // smaller height
            className="w-12 h-12 rounded-xl"
          />
          My Website
        </Link>

        {/* Navbar toggle button for mobile */}
        <button
          className="md:hidden text-white"
          onClick={() => setNavbarOpen(!navbarOpen)} // Toggle state
        >
          <i className={`fas ${navbarOpen ? 'fa-times' : 'fa-bars'}`}></i> {/* FontAwesome icon */}
        </button>

        {/* Menu for larger screens */}
        <div className={`menu ${navbarOpen ? 'block' : 'hidden'} md:block md:w-auto`} id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-10">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.path} className="text-white hover:text-gray-200">
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
