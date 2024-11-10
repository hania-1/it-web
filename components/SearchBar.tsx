'use client';
import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

const SearchBar = ({ handleSearch }: { handleSearch: (query: string) => void }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const onSearchClick = () => {
    handleSearch(query); // Call the passed handleSearch function
  };

  const onEnterPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch(query); // Call the handleSearch function when Enter is pressed
    }
  };

  return (
    <div className="flex justify-center my-6">
      <div className="relative flex w-full max-w-lg rounded-full shadow-lg">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          onKeyDown={onEnterPress} // Trigger search on Enter key
          className="w-full px-4 py-3 rounded-full outline-none border-1 border-gray-300 text-gray-800 focus:border-blue-500 transition-all duration-300"
          // placeholder="Search..."
        />
        <div className="absolute left-4 top-3 text-gray-500">
          <TypeAnimation
            sequence={[
              "Programming Languages!",
              1000,
              "Tech News & Trends",
              1000,
              "Exploring AI",
              1000,
              "Development",
              1000,
              "Fun Projects",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-gray-500"
          />
        </div>
        <button
          onClick={onSearchClick} // Trigger search on button click
          className="px-1 py-1 text-white rounded-full ml-1 hover:bg-blue-600 transition duration-300 flex items-center"
        >
          <i className="fas fa-search"></i> {/* Font Awesome magnifying glass icon */}
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
