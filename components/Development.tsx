"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const Development = () => {
  return (
    <div>
      <div>
        <div className="text-5xl uppercase font-bold text-center font-mono m-6 my-11">
          <TypeAnimation
            sequence={["Web Development!", 1000]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-gray-500"
          />
        </div>
        {/* ... */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8">
          <div>
            {/* Box 1 */}
            <div className="bg-[#e2c8a5] rounded-lg p-4 shadow-md h-28 flex flex-col justify-between text-center font-bold font-serif text-lg text-white">
              JavaScript
              <div className="mt-2 flex justify-center">
                <Link
                  href="https://www.geeksforgeeks.org/javascript/?ref=home-articlecards"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-white transition duration-200"
                >
                  <i className="fas fa-external-link-alt text-xl">click me</i>
                </Link>
              </div>
            </div>
          </div>

          <div>
            {/* Box 2 */}
            <div className="bg-[#e2c8a5] rounded-lg p-4 shadow-md h-28 flex flex-col justify-between text-center font-bold font-serif text-lg text-white">
              HTML
              <div className="mt-2 flex justify-center">
                <Link
                  href="https://www.geeksforgeeks.org/html-tutorial/?ref=home-articlecards"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-white transition duration-200"
                >
                  <i className="fas fa-external-link-alt text-xl">click me</i>
                </Link>
              </div>
            </div>
          </div>

          <div>
            {/* Box 3 */}
            <div className="bg-[#e2c8a5] rounded-lg p-4 shadow-md h-28 flex flex-col justify-between text-center font-bold font-serif text-lg text-white">
              CSS
              <div className="mt-2 flex justify-center">
                <Link
                  href="https://www.geeksforgeeks.org/css-tutorial/?ref=home-articlecards"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-white transition duration-200"
                >
                  <i className="fas fa-external-link-alt text-xl">click me</i>
                </Link>
              </div>
            </div>
          </div>

          <div>
            {/* Box 4 */}
            <div className="bg-[#e2c8a5] rounded-lg p-4 shadow-md h-28 flex flex-col justify-between text-center font-bold font-serif text-lg text-white">
              React.js
              <div className="mt-2 flex justify-center">
                <Link
                  href="https://www.geeksforgeeks.org/react/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-white transition duration-200"
                >
                  <i className="fas fa-external-link-alt text-xl">click me</i>
                </Link>
              </div>
            </div>
          </div>

          <div>
            {/* Box 5 */}
            <div className="bg-[#e2c8a5] rounded-lg p-4 shadow-md h-28 flex flex-col justify-between text-center font-bold font-serif text-lg text-white">
              Node.js
              <div className="mt-2 flex justify-center">
                <Link
                  href="https://www.geeksforgeeks.org/nodejs/?ref=home-articlecards"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-white transition duration-200"
                >
                  <i className="fas fa-external-link-alt text-xl">click me</i>
                </Link>
              </div>
            </div>
          </div>

          <div>
            {/* Box 6 */}
            <div className="bg-[#e2c8a5] rounded-lg p-4 shadow-md h-28 flex flex-col justify-between text-center font-bold font-serif text-lg text-white">
              Next.js
              <div className="mt-2 flex justify-center">
                <Link
                  href="https://nextjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-white transition duration-200"
                >
                  <i className="fas fa-external-link-alt text-xl">click me</i>
                </Link>
              </div>
            </div>
          </div>

          <div>
            {/* Box 7 */}
            <div className="bg-[#e2c8a5] rounded-lg p-4 shadow-md h-28 flex flex-col justify-between text-center font-bold font-serif text-lg text-white">
              Front-End Development
              <div className="mt-2 flex justify-center">
                <Link
                  href="https://www.geeksforgeeks.org/front-end-development/?ref=home-articlecardsv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-white transition duration-200"
                >
                  <i className="fas fa-external-link-alt text-xl">click me</i>
                </Link>
              </div>
            </div>
          </div>

          <div>
            {/* Box 8 */}
            <div className="bg-[#e2c8a5] rounded-lg p-6 shadow-md h-28 flex flex-col justify-between text-center font-bold font-serif text-lg text-white drop-shadow-xl">
              Back-End Development
              <div className="mt-2 flex justify-center">
                <Link
                  href="https://www.geeksforgeeks.org/backend-development/?ref=home-articlecards"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-white transition duration-200"
                >
                  <i className="fas fa-external-link-alt text-xl">click me</i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Development;
