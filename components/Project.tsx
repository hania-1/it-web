"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";

const Project = () => {
  return (
    <div>
      <div className="text-5xl uppercase font-bold text-center font-mono m-6 my-11">
        <TypeAnimation
          sequence={["Project!", 1000]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-gray-500"
        />
      </div>
      <div className="text-3xl text-center font-serif m-14 text-gray-700">
        Oky! So not wasting your more time,lets dive into some fun projects.
        <hr className="my-11 border-t-2 border-gray-800 w-full max-w-lg mx-auto" />
      </div>
      <div className="text-3xl text-center font-serif m-14">
        Lets make a <strong>Solar System</strong>
      </div>
      <div className="text-3xl text-center font-serif m-16">
        Its a Simple and easy Project based on just <strong>HTML</strong> &{" "}
        <strong>CSS</strong>
        <Image
          className="mx-auto m-6"
          src="/pic-9.png"
          alt="Solar System"
          width={400}
          height={500}
        />
      </div>
      <div className="text-3xl text-center font-serif m-14 text-teal-500">
        Source Code
      </div>

      <div className="flex justify-center items-start space-x-8 p-8">
        {/* First Code Block - Left */}
        <div className="bg-[#4CAF97] rounded-lg p-8 shadow-md max-w-sm w-full text-center font-bold text-2xl text-white">
          <div className="bg-gray-800 rounded-md overflow-y-auto max-h-96 p-4">
            <pre className="text-left text-sm text-gray-300 whitespace-pre-wrap">
              {`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>SOLAR SYSTEM</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <ol>
      <li class="sun"></li>
      <li class="mercury"></li>
      <li class="venus"></li>
      <li class="earth"></li>
      <li class="mars"></li>
      <li class="jupiter"></li>
      <li class="saturn"></li>
      <li class="uranus"></li>
      <li class="neptune"></li>
    </ol>
  </body>
</html>
        `}
            </pre>
          </div>
        </div>

        {/* Second Code Block - Right */}
        <div className="bg-[#4CAF97] rounded-lg p-8 shadow-md max-w-sm w-full text-center font-bold text-2xl text-white">
          <div className="bg-gray-800 rounded-md overflow-y-auto max-h-96 p-4">
            <pre className="text-left text-sm text-gray-300 whitespace-pre-wrap">
              {`
body {
  background: #000F;
  color: #FFFA;
  margin: 0;
  width: 100vw;
}

ol {
  all: unset;
  aspect-ratio: 1 / 1;
  container-type: inline-size;
  display: grid;
  width: 100%;
}

li {
  aspect-ratio: 1 / 1;
  border: 1px dashed;
  border-radius: 50%;
  display: grid;
  grid-area: 1 / 1;
  place-self: center;
  width: var(--d, 2cqi);
  position: relative;
}

li::before {
  content: attr(data-name);
  color: white;
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.9rem;
  font-family: Arial, sans-serif;
}

li::after {
  animation: rotate var(--t, 3s) linear infinite;
  aspect-ratio: 1 / 1;
  background: var(--b, hsl(0, 0%, 50%));
  border-radius: 50%;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  content: '';
  display: block;
  offset-path: content-box;
  width: var(--w, 2cqi);
}

@keyframes rotate {
  to {
      offset-distance: 100%;
  }
}

/* Sun Glow Effect */
.sun {
  --b: radial-gradient(circle, #f9d71c 0%, #f9a825 50%, #f9a825 100%);
  --d: 10cqi;
  --w: 8cqi;
  border: 0;
  animation: glow 1.5s infinite alternate;
  &::after {
      animation: none;
      offset-path: none;
      place-self: center;
  }
}

/* Glow Animation */
@keyframes glow {
  from {
      box-shadow: 0 0 20px rgba(249, 215, 28, 0.8);
  }
  to {
      box-shadow: 0 0 40px rgba(249, 215, 28, 1);
  }
}

/* Individual Planets */
.mercury {
  --b: radial-gradient(circle, #c2c2c2 0%, #8a8a8a 100%);
  --d: 15cqi;
  --t: 2105.26ms;
  --w: 2.0526cqi;
}

.venus {
  --b: radial-gradient(circle, #f4d03f 0%, #c39c43 100%);
  --d: 25cqi;
  --t: 4210.53ms;
  --w: 2.6053cqi;
}

.earth {
  --b: radial-gradient(circle, #3a82f7 0%, #2f9e44 80%, #1a5e20 100%);
  --d: 35cqi;
  --t: 6315.79ms;
  --w: 3.1579cqi;
}

.mars {
  --b: radial-gradient(circle, #e57373 0%, #af4448 100%);
  --d: 45cqi;
  --t: 8421.05ms;
  --w: 3.7105cqi;
}

.jupiter {
  --b: radial-gradient(circle, #d4a373 0%, #b36d32 50%, #f4e7d3 100%);
  --d: 60cqi;
  --t: 12631.58ms;
  --w: 4.8158cqi;
}

.saturn {
  --b: radial-gradient(circle, #e6dba0 0%, #c2a13e 100%);
  --d: 75cqi;
  --t: 14736.84ms;
  --w: 5.3684cqi;
}

.uranus {
  --b: radial-gradient(circle, #7de3f4 0%, #3ba0b5 100%);
  --d: 84.5cqi;
  --t: 10526.32ms;
  --w: 4.2632cqi;
}

.neptune {
  --b: radial-gradient(circle, #4c6ef5 0%, #1b3b8c 100%);
  --d: 94cqi;
  --t: 20000ms;
  --w: 6cqi;
}

/* Responsive Design */
@media (max-width: 768px) {
  li {
      --d: 10cqi;
  }
  .earth {
      --w: 2cqi;
  }
}

/* Hover Info */
li:hover::before {
  content: attr(data-name) ' Info';
  background-color: rgba(0, 0, 0, 0.8);
  padding: 5px;
  border-radius: 5px;
  position: absolute;
  top: -40px;
  font-size: 0.8rem;
}

        `}
            </pre>
          </div>
        </div>
      </div>
      <hr className="my-11 border-t-2 border-gray-800 w-full max-w-lg mx-auto" />
          </div>
  );
};

export default Project;
