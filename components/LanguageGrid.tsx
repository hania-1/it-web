// components/LanguageGrid.tsx
import React from "react";
import Image from "next/image";

const languages = [
  {
    id: 1,
    name: "TypeScript",
    image: "/pic-3.png",
    description:
      "A typed superset of JavaScript, popular for building large applications.",
    bgColor: "bg-white",
  },
  {
    id: 2,
    name: "Java",
    image: "/pic-4.png",
    description:
      "Widely used for enterprise applications, backend development, and Android apps.",
    bgColor: "bg-red-200",
  },
  {
    id: 3,
    name: "HTML",
    image: "/pic-5.png",
    description:
      "The standard language for creating web pages and web applications.",
    bgColor: "bg-orange-200",
  },
  {
    id: 4,
    name: "PHP",
    image: "/pic-6.png",
    description:
      "A popular server-side language for building dynamic web applications and managing server databases efficiently.",
    bgColor: "bg-purple-200",
  },
  {
    id: 5,
    name: "Python",
    image: "/pic-7.png",
    description:
      "Highly versatile, used in web development, data science, AI, and more.",
    bgColor: "bg-green-200",
  },
  {
    id: 6,
    name: "CSS",
    image: "/pic-8.png",
    description:
      "A stylesheet language for designing and making web pages visually appealing.",
    bgColor: "bg-blue-200",
  },
];

const LanguageGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 drop-shadow-lg">
      {languages.map((language) => (
        <div
          key={language.id}
          className={`${language.bgColor} flex flex-col items-center p-6 rounded-lg shadow-md max-w-[250px] mx-auto transition-transform duration-300 hover:scale-105 hover:shadow-lg`}
        >
          <Image
            src={language.image}
            alt={language.name}
            width={100}
            height={100}
            className="mb-4 rounded-md"
          />
          <h3 className="text-xl font-semibold mb-2 text-gray-800">
            {language.name}
          </h3>
          <p className="text-center text-gray-700 text-sm">
            {language.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default LanguageGrid;
