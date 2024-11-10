// components/News.tsx
"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import Link from "next/link";

const News = () => {
  return (
    <section id="news" className="py-4 px-4 bg-gray-200 rounded-md">
      <div className="text-5xl uppercase font-bold text-center font-mono m-6 my-11 rounded-lg">
        <TypeAnimation
          sequence={["Ai Agents", 1000]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-gray-500"
        />
        <div className="text-3xl text-center font-normal m-14">The Spicy Talk is all about the AI Agents,see the Reason to find your WHY?</div>
      </div>
      {/* <h2 className="text-3xl font-semibold text-center text-[#333] mb-8">Latest Tech News</h2> */}
      <div className="max-w-3xl mx-auto text-lg text-gray-700 rounded-lg">
        <Image
          src="/pic-20.png"
          alt="Tech News"
          width={200}
          height={500}
          className="mx-auto rounded-lg top-0 left-0 m-6"
        />
        <p className="mb-4">
          Stay updated with the latest developments in technology, from
          breakthroughs in AI to the newest gadgets. The world of tech is
          ever-evolving, and keeping up with the trends helps us make informed
          decisions.
        </p>

        <h3 className="text-2xl font-medium mt-6 mb-4">Recent Headlines</h3>
        <ul className="list-disc pl-6">
          <li>
            <strong>AI Advances in Healthcare:</strong> Discover how AI is
            transforming diagnostics and patient care.
          </li>
          <li>
            <strong>New Smartphone Launch:</strong> The latest features in the
            next-gen flagship phone from XYZ.
          </li>
          <li>
            <strong>Quantum Computing Milestone:</strong> Researchers have made
            a breakthrough that could change everything.
          </li>
          <li>
            <strong>Tech Giants Merging:</strong> The latest partnership between
            two of the biggest tech companies.
          </li>
          <li>
            <strong>Virtual Reality in Education:</strong> How VR is shaping the
            future of learning and training.
          </li>
        </ul>

        <p className="mt-6">
          These are just a few of the headlines from the world of tech. Stay
          tuned for more updates as we continue to track the latest innovations.
        </p>
      </div>

      <section id="ai-agents" className="py-16 px-8 bg-gray-200">
        <div className="max-w-3xl mx-auto text-lg text-gray-700 rounded-lg">
          <h2 className="text-3xl font-semibold text-center text-[#333] mb-8">
            What Are AI Agents?
          </h2>
          <p className="mb-4">
            AI agents are intelligent systems designed to perform tasks by
            mimicking human-like cognitive processes. These agents are capable
            of performing tasks like decision-making, problem-solving, and
            adapting to new information, all powered by algorithms and machine
            learning models.
          </p>
          <p className="mb-4">
            They can be found in a variety of fields, such as robotics, finance,
            healthcare, and customer service, continuously improving as they
            learn.
          </p>

          <h3 className="text-2xl font-medium mt-6 mb-4">Types of AI Agents</h3>
          <ul className="list-disc pl-6">
            <li>
              <strong>Reactive Agents:</strong> React based on predefined rules
              without learning from past experiences.
            </li>
            <li>
              <strong>Autonomous Agents:</strong> Make decisions independently
              and learn from their environment.
            </li>
            <li>
              <strong>Collaborative Agents:</strong> Work with others to
              complete tasks, sharing data for improved outcomes.
            </li>
            <li>
              <strong>Cognitive Agents:</strong> Mimic human-level reasoning and
              decision-making processes.
            </li>
            <li>
              <strong>Embodied Agents:</strong> These agents have a physical
              presence, such as robots, that interact with their environment.
            </li>
          </ul>

          <p className="mt-6">
            <Image
              src="/pic-19.png"
              alt="AI Agents"
              width={200}
              height={500}
              className="rounded-lg m-6"
            />
            AI agents are transforming industries such as healthcare, finance,
            and entertainment, improving efficiency and personalizing services.
            For example, in healthcare, AI agents assist in diagnosing diseases
            and recommending treatments. In finance, they help with algorithmic
            trading, risk management, and customer service automation.
          </p>
          <div>
            If you wanted to know more about AI agents, you can viste this Page{" "}
            <Link
              href="https://zapier.com/blog/ai-agent/?ref=blog.context.ai&utm_source=google&utm_medium=cpc&utm_campaign=gaw-row-nua-evr-search_nb_desktop_blog_prospecting_developing1_developing2-ads&utm_term=&utm_content=9198368&utm_ads_campaign_id=19622168382&utm_ads_adset_id=157760468828&utm_ads_ad_id=659058345728&gad_source=1&gclid=Cj0KCQiA57G5BhDUARIsACgCYnzqxFLP7HQ-jVB7QyjuLP1ToGwZOdNRqtds8UioI_kYjSzaNXuBG0waAnvJEALw_wcB"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-4 py-1 bg-white text-[#7e5a86] font-medium text-lg rounded-md shadow hover:bg-gray-300 transition duration-200"
            >
              More About AI Agents!
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
};

export default News;
