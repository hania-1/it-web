"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";

const Artificial = () => {
  return (
    <div>
      <div className="text-5xl uppercase font-bold text-center font-mono m-6 my-11 ">
        <TypeAnimation
          sequence={["AI!", 1000]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-gray-500"
        />
        <div>
          <h1 className="text-3xl font-bold text-center font-mono m-14">
            Lets Talk About Artificial Intelligence
          </h1>
        </div>
        <div className="text-3xl text-center font-normal m-14">
          So i asked myself to write an essay with my thoughts on AI (Artificial
          Intelligence). So in the spirit of things, I have tasked ChatGPT to
          write this article for me.
          <hr className="my-11 border-t-2 border-gray-800 w-full max-w-lg mx-auto" />
          <div className="text-3xl text-center font-normal m-14">
            {" "}
            Im kidding. Or maybe Im not, I guess we will never find out? (:{" "}
          </div>{" "}
          AI is everywhere today. And its all just the beginning. Its
          impossible to ignore and I can already say as much now, it will be
          with us for a very long time to come.
        </div>
        <div className="text-3xl text-center font-normal m-14">
          <Image
            className="mx-auto m-6 rounded-xl "
            src="/pic-21.png"
            alt="artificial"
            width={200}
            height={500}
          />
          And you probably wonder, where has it been before? Why is it suddenly
          moving so fast? And the simple answer is: <strong>The models for AI have been
          around for more than a decade, many of them are nothing new.</strong> But what
          is new, is the <strong>advancements of hardware chips,</strong> computing power and the
          willingness to spend large amounts of money on it. And the timing is
          just perfect. We are at the tippity-top of digital consumerism. The
          ultimate late-stage-capitalism phase. It all makes sense if you think
          about it.<strong> For millennials it was the internet. For Gen-Z and beyond,
          it will be AI.</strong>
        </div>
      </div>
    </div>
  );
};

export default Artificial;
