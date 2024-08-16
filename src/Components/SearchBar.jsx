import React, { useEffect, useState } from "react";

const SearchBar = ({ onSearch, searchTerm, onSearchReset }) => {
  const [input, setInput] = useState(searchTerm || "");

  useEffect(() => {
    setInput(searchTerm);
  }, [searchTerm]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(input);
    onSearchReset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center mx-auto max-w-xl py-2 px-6 rounded-full bg-gray-50 border"
    >
      <input
        type="text"
        placeholder="Search anything"
        value={input}
        onChange={handleChange}
        className="bg-transparent w-full focus:outline-none pr-4 font-semibold border-0 focus:ring-0 px-0 py-0"
      />
      <button
        type="submit"
        className="flex items-center justify-center min-w-[130px] px-4 rounded-full font-medium tracking-wide border bg-black text-white py-1.5 h-[38px] -mr-3"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
