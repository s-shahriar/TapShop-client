import React, { useState } from "react";

const Filter = ({ onFilter, onFilterReset, brands, categories, onSearchReset }) => {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1500]);

  const handleFilter = () => {
    onFilter({
      brand: selectedBrand,
      category: selectedCategory,
      priceRange: priceRange,
    });
  };

  const handleReset = () => {
    setSelectedBrand("");
    setSelectedCategory("");
    setPriceRange([0, 1500]);
    onFilterReset();
    onSearchReset(); 
  };

  return (
    <div className="flex flex-wrap gap-4 items-center justify-center">
      <select
        value={selectedBrand}
        onChange={(e) => setSelectedBrand(e.target.value)}
        className="border py-2 px-3 rounded-lg"
      >
        <option value="">All Brands</option>
        {brands.map((brand) => (
          <option key={brand} value={brand}>
            {brand}
          </option>
        ))}
      </select>

      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="border py-2 px-3 rounded-lg"
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <div className="flex flex-col items-center">
        <input
          type="range"
          min="0"
          max="1500"
          value={priceRange[1]}
          onChange={(e) => setPriceRange([0, Number(e.target.value)])}
          className="w-full bg-black accent-black"
        />
        <span className="text-center text-gray-700 mt-2">
          Price Range: ${priceRange[0]} - ${priceRange[1]}
        </span>
      </div>

      <button
        onClick={handleFilter}
        className="bg-black text-white py-2 px-4 rounded-lg"
      >
        Apply Filters
      </button>
      <button
        onClick={handleReset}
        className="bg-black text-white py-2 px-4 rounded-lg"
      >
        Reset Filters
      </button>
    </div>
  );
};

export default Filter;