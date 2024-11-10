"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";

const Languages = () => {
  return (
    <div className="text-5xl uppercase font-bold text-center font-mono m-6 my-11">
      <TypeAnimation
        sequence={["Languages!", 1000]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        className="text-gray-500"
      />
      <div className="text-3xl text-center font-serif m-14">Languages which are flying these days!</div>
      <div className="flex text-center font-normal text-xl m-5 ">
        In 2024, several programming languages stand out due to their
        popularity, versatility, and job market demand. JavaScript remains a
        cornerstone for web development, enabling dynamic content on websites
        and supporting backend development with Node.js. Python continues to
        thrive for its ease of use and extensive applications in data science,
        artificial intelligence, and web development. Java is prevalent in
        enterprise-level applications and Android app development, prized for
        its portability across platforms. C# is favored for Windows applications
        and game development, particularly with Unity. TypeScript, a superset of
        JavaScript, enhances development by adding static types, making it ideal
        for large-scale applications. C++ is renowned for system-level
        programming and applications requiring high performance. Go (Golang) is
        increasingly popular for its efficiency in cloud services and concurrent
        programming. Ruby is well-known for web development through Ruby on
        Rails, emphasizing simplicity and productivity. PHP remains a staple for
        server-side web development, powering many websites and content
        management systems. Lastly, Swift is the primary language for iOS and
        macOS app development, recognized for its modern syntax and performance.
        <Image src="/pic-2.png" alt="logo" width={600} height={500} />
      </div>

      {/* language logo */}

      <div className="container mx-auto " ></div>
    </div>
  );
};

export default Languages;
