"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const Explore = () => {
  return (
    <div>
       <hr className="my-11 border-t-2 border-gray-800 w-full max-w-lg mx-auto" />
      <div className="text-5xl uppercase font-bold text-center font-mono m-6 my-11">
        <TypeAnimation
          sequence={["Explore!", 1000]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-gray-500"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
  {/* box 1 */}
  <div className="bg-[#4CAF97] rounded-lg p-8 shadow-md max-w-sm mx-auto text-center font-bold text-2xl text-white">
    How to Strengthen Your Code
    <div className="mt-4">
      <Link
        href="https://www.freecodecamp.org/news/essential-secure-design-principles-for-developers/?ref=dailydev"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 px-4 py-1 bg-white text-[#4CAF97] font-medium text-lg rounded-md shadow hover:bg-gray-300 transition duration-200"
      >
        Visit FreeCodeCamp
      </Link>
    </div>
  </div>

  {/* box 2 */}
  <div className="bg-[#25879C] rounded-lg p-8 shadow-md max-w-sm mx-auto text-center font-bold text-2xl text-white">
    Code Review: A New Developers Guide
    <div className="mt-4">
      <Link
        href="https://spin.atomicobject.com/reviewing-code-new-dev/?ref=dailydev"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 px-4 py-1 bg-white text-[#676aa8] font-medium text-lg rounded-md shadow hover:bg-gray-300 transition duration-200"
      >
        Visit FreeCodeCamp
      </Link>
    </div>
  </div>

  {/* box 3 */}
  <div className="bg-[#AF6160] rounded-lg p-8 shadow-md max-w-sm mx-auto text-center font-bold text-2xl test-white">
    How Developers Destroy Brain Health
    <div className="mt-4">
      <Link
        href="https://dev.to/ssukhpinder/how-developers-destroy-brain-health-4kgd?ref=dailydev"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 px-4 py-1 bg-white text-[#AF6160] font-medium text-lg rounded-md shadow hover:bg-gray-300 transition duration-200"
      >
        Visit FreeCodeCamp
      </Link>
    </div>
  </div>

  {/* box 4 */}
  <div className="bg-[#715b96] rounded-lg p-8 shadow-md max-w-sm mx-auto text-center font-bold text-2xl text-white">
    How Developers Destroy Brain Health
    <div className="mt-4">
      <Link
        href="https://dev.to/ssukhpinder/how-developers-destroy-brain-health-4kgd?ref=dailydev"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 px-4 py-1 bg-white text-[#715b96] font-medium text-lg rounded-md shadow hover:bg-gray-300 transition duration-200"
      >
        Visit FreeCodeCamp
      </Link>
    </div>
  </div>
</div>

    </div>
  );
};

export default Explore;
