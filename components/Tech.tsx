"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";

const Tech = () => {
  return (
    <div>
      <hr className="my-11 border-t-2 border-gray-800 w-full max-w-lg mx-auto" />
      <div className="text-5xl uppercase font-bold text-center font-mono m-6 my-11">
        <TypeAnimation
          sequence={["Tech & Trends!", 1000]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-gray-500"
        />
      </div>
      <div className="text-3xl uppercase font-bold text-center font-mono m-6 my-11">
        So now,Lets find out whats going on in the world of Tech!
      </div>
      <div className="text-3xl text-center font-serif m-14">
        From AI and super app to web 3.0, blockchain, and beyond, we are
        decoding the present and future tech landscape and how its reshaping
        industries worldwide. Lets hop on this insightful journey!
        <div className="text-3xl text-center font-serif m-14">
          Nothing is certain when everything becomes a priority. Since
          comprehending the scale and scope of the ever-changing technology
          landscape is not easy, many business leaders across the world struggle
          through an indecisive phase.
        </div>
        <Image src="/pic-11.png" alt="tech" width={600} height={500} />
        <Image src="/pic-12.png" alt="tech" width={600} height={500} />
      </div>
      <div className="text-3xl text-center font-serif m-14 bg-[#25879C]">
        Is the Future is Block-Chain?
      </div>
      <Image
        src="/pic-13.png"
        alt="tech"
        width={500}
        height={500}
        className=" mx-auto m-6"
      />
      <div className="text-3xl text-center font-serif m-14">
        {" "}
        Yes, blockchain technology has a bright future and is expected to
        reshape many aspects of our digital and physical worlds, we can expect
        to see blockchain integrated into a wide range of sectors, from finance
        to healthcare, proving that blockchain is the future of secure and
        reliable data management.
      </div>
      <div className="text-3xl text-center font-serif m-14 bg-[#807aa3]">
        Robotic process automation (RPA) to the rescue
      </div>
      <div className="text-3xl text-center font-serif m-14">
        <Image src="/pic-14.png" alt="tech" width={400} height={500} />
        <br></br>
        <p>
          In 2022, the robotic process automation (RPA) markets growth rate
          reached 22%, which, as stated by Gartner, means RPA is entering its
          early maturity stage.
        </p>{" "}
        <br></br>
        <p>
          Robotic process automation will continue to gain momentum as it offers
          core teams the freedom to focus on the most important parts of the
          business by relieving them of tedious, time-consuming tasks. The
          technology can help with almost any repetitive action – from general
          back-office tasks to testing and data migration.
        </p>
        <br></br>
        Offering the potential to hyper-automate, robotic process automation
        will be an interesting efficiency booster for software engineering
        teams.
      </div>
      <div className="text-3xl text-center font-serif m-14  bg-[#92678c]">
        Artificial intelligence is taking over
      </div>
      <div className="text-3xl text-center font-serif m-14">
        <Image
          src="/pic-15.png"
          alt="tech"
          width={400}
          height={500}
          className="mx-auto m-6"
        />
        <br></br>
        <p>
          ...well, at least in some ways. AI is not just another outsourcing
          trend. Artificial intelligence will take center stage in the
          technological revolution that accompanies automation, making the
          promise of automating specific functions even more tangible.
        </p>{" "}
        <br></br>
        <p>
          {" "}
          Both artificial intelligence and machine learning will become
          invaluable technologies in many business processes, including
          predictive analysis, customer service, and software development. With
          the growing pressure for time savings and operation optimization
          requirements, AI and ML address these challenges.
        </p>{" "}
        <br></br>
        <p>
          When choosing outsourcing partners, their ability to incorporate AI
          and ML into operations will soon become one of the deciding factors.
        </p>
      </div>
      <div className="text-3xl text-center font-serif m-14 bg-[#bbb7af]">
        Cloud-native and multi-cloud outsourcing services are gaining ground
      </div>
      <div className="text-3xl text-center font-serif m-14">
        <Image src="/pic-16.png" alt="tech" width={400} height={500} />
        <br></br>
        <p>
          Cloud computing is no new subject to tech-savvy businesses. Leveraging
          the cloud allows companies to scale and adapt to growing market
          demands.
        </p>
        <br></br>
        <p>
          Now, as multi-cloud strategies gain traction, the role of cloud
          services in IT outsourcing partnerships will grow, especially given
          its role in risk management and redundancy enhancement.
        </p>
      </div>
      <hr className="my-11 border-t-2 border-gray-800 w-full max-w-lg mx-auto" />
      <div className="text-3xl text-center font-serif m-14">
        The field of AI is incredibly vast, making it challenging to choose a
        specific area to focus on. From natural language processing, computer
        vision, and robotics to machine learning, neural networks, and ethical
        AI, each subfield offers unique opportunities and complexities. As AI
        continues to evolve, new specializations and interdisciplinary
        applications emerge, adding even more options. Selecting a field
        requires understanding your interests and strengths, as well as
        considering the real-world impact and future growth of that
        specialization.
      </div>
      <div  className="text-3xl text-center font-serif m-14">
      <Image src="/pic-18.png" alt="Rotating Image" width={200} height={100} className="rotate-image rounded-lg m-6" />

        Therefore, you need to choose an area within AI that aligns with your
        interests. With so many options available, its important to focus on
        what genuinely excites you. By selecting a specific field that resonates
        with your passions, you will find it easier to stay motivated and deeply
        engaged as you advance in your AI journey.
      </div>
    </div>
  );
};

export default Tech;
