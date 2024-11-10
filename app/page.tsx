// pages/index.tsx
'use client';

import React from "react";
import Navbar from "@/components/Navbar";
import Start from "@/components/Start";
import SearchBar from "@/components/SearchBar"; // Make sure this is imported correctly
import Explore from "@/components/Explore";
import Languages from "@/components/Languages";
import LanguageGrid from "@/components/LanguageGrid";
import Development from "@/components/Development";
import Artificial from "@/components/Artificial";
import Project from "@/components/Project";
import QuizComponent from "@/components/QuizComponent";
import Tech from "@/components/Tech";
import News from "@/components/News";
import Chunks from "@/components/Chunks";
import Footer from "@/components/Footer";

export default function Home() {
  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
    // You can add search functionality here
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#ddd6f3] to-[#faaca8]">
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <div className="container mt-24 mx-auto px-12 py-4">
        <div id="start"><Start /></div>
        <SearchBar handleSearch={handleSearch} /> {/* Pass handleSearch as a prop */}
        <div id="explore"><Explore /></div>
        <div id="languages"><Languages /></div>
        <div id="languageGrid"><LanguageGrid /></div>
        <div id="development"><Development /></div>
        <div id="artificial"><Artificial /></div>
        <div id="project"><Project /></div>
        <div id="quiz"><QuizComponent /></div>
        <div id="tech"><Tech /></div>
        <div id="news"><News /></div>
        <div id="chunks"><Chunks /></div>
        <Footer />
      </div>
      
    </main>
  );
}
