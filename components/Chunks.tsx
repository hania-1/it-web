import React from "react";
import { FaLink } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const Chunks = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl uppercase font-bold text-center font-mono m-4">
        <TypeAnimation
          sequence={["Little Chunks of Knowledge!", 1000]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-gray-500"
        />
      </div>
      <div className="text-xl text-center font-mono m-8">
        Here Watch Some Fun Facts And Chunks.
      </div>

      {/* Card Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Card 1 */}
        <div className="bg-gray-100 shadow-lg rounded-md overflow-hidden max-w-xs mx-auto transition-transform transform hover:scale-105 hover:shadow-2xl">
          <div className="p-4">
            <h3 className="text-lg font-bold mb-2">Improve Your Daily Focus</h3>
            <p className="text-gray-600 text-sm">
              Discover simple tips to enhance your focus and productivity every day.
            </p>
          </div>
          <div className="relative group">
            <Image
              src="/pic-23.png"
              alt="Focus Tips"
              width={300}
              height={180}
              className="w-full h-auto object-cover"
            />
            <Link
              href="https://medium.com/twosapp/7-simple-tips-to-improve-your-daily-focus-6300d93effc8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300">
                <FaLink className="text-white text-2xl opacity-0 group-hover:opacity-100 transition duration-300" />
              </div>
            </Link>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-100 shadow-lg rounded-md overflow-hidden max-w-xs mx-auto transition-transform transform hover:scale-105 hover:shadow-2xl">
          <div className="p-4">
            <h3 className="text-lg font-bold mb-2">How to Write Clean Code</h3>
            <p className="text-gray-600 text-sm">
              Tips for writing clean and maintainable code as a developer.
            </p>
          </div>
          <div className="relative group">
            <Image
              src="/pic-24.png"
              alt="Clean Code Tips"
              width={300}
              height={180}
              className="w-full h-auto object-cover"
            />
            <Link
              href="https://www.freecodecamp.org/news/how-to-write-clean-code-tips-for-developers/?ref=dailydev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300">
                <FaLink className="text-white text-2xl opacity-0 group-hover:opacity-100 transition duration-300" />
              </div>
            </Link>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-100 shadow-lg rounded-md overflow-hidden max-w-xs mx-auto transition-transform transform hover:scale-105 hover:shadow-2xl">
          <div className="p-4">
            <h3 className="text-lg font-bold mb-2">AI Coding Assistant Tools</h3>
            <p className="text-gray-600 text-sm">
              Explore AI tools that can assist in coding and improve efficiency.
            </p>
          </div>
          <div className="relative group">
            <Image
              src="/pic-25.png"
              alt="AI Coding Tools"
              width={300}
              height={180}
              className="w-full h-auto object-cover"
            />
            <Link
              href="https://spacelift.io/blog/ai-coding-assistant-tools?ref=dailydev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300">
                <FaLink className="text-white text-2xl opacity-0 group-hover:opacity-100 transition duration-300" />
              </div>
            </Link>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-gray-100 shadow-lg rounded-md overflow-hidden max-w-xs mx-auto transition-transform transform hover:scale-105 hover:shadow-2xl">
          <div className="p-4">
            <h3 className="text-lg font-bold mb-2">Skills for Junior Web Developers</h3>
            <p className="text-gray-600 text-sm">
              Explore essential skills to focus on as a junior web developer in 2024.
            </p>
          </div>
          <div className="relative group">
            <Image
              src="/pic-26.png"
              alt="Junior Developer Skills"
              width={300}
              height={180}
              className="w-full h-auto object-cover"
            />
            <Link
              href="https://frontendmasters.com/blog/what-skills-should-you-focus-on-as-junior-web-developer-in-2024/?ref=dailydev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300">
                <FaLink className="text-white text-2xl opacity-0 group-hover:opacity-100 transition duration-300" />
              </div>
            </Link>
          </div>
        </div>

        {/* Card 5 */}
        <div className="bg-gray-100 shadow-lg rounded-md overflow-hidden max-w-xs mx-auto transition-transform transform hover:scale-105 hover:shadow-2xl">
          <div className="p-4">
            <h3 className="text-lg font-bold mb-2">Types of Fonts for UX Design</h3>
            <p className="text-gray-600 text-sm">
              Learn about different font types and how they impact UX design.
            </p>
          </div>
          <div className="relative group">
            <Image
              src="/pic-27.png"
              alt="UX Design Fonts"
              width={300}
              height={180}
              className="w-full h-auto object-cover"
            />
            <Link
              href="https://blog.logrocket.com/ux-design/types-of-fonts/?ref=dailydev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300">
                <FaLink className="text-white text-2xl opacity-0 group-hover:opacity-100 transition duration-300" />
              </div>
            </Link>
          </div>
        </div>

        {/* Card 6 */}
        <div className="bg-gray-100 shadow-lg rounded-md overflow-hidden max-w-xs mx-auto transition-transform transform hover:scale-105 hover:shadow-2xl">
          <div className="p-4">
            <h3 className="text-lg font-bold mb-2">React Best Practices</h3>
            <p className="text-gray-600 text-sm">
              Discover best practices every React developer should know.
            </p>
          </div>
          <div className="relative group">
            <Image
              src="/pic-28.png"
              alt="React Best Practices"
              width={300}
              height={180}
              className="w-full h-auto object-cover"
            />
            <Link
              href="https://www.freecodecamp.org/news/react-best-practices-ever-developer-should-know/?ref=dailydev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300">
                <FaLink className="text-white text-2xl opacity-0 group-hover:opacity-100 transition duration-300" />
              </div>
            </Link>
          </div>
        </div>

      </div>
      <hr className="my-11 border-t-2 border-gray-800 w-full max-w-lg mx-auto" />

    </div>
  );
};

export default Chunks;
