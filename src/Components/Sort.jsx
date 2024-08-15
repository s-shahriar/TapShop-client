import React from "react";

const Sort = ({ onSort, sortOption }) => {
  const handleSortChange = (e) => {
    onSort(e.target.value);
  };

  return (
    <select
      onChange={handleSortChange}
      value={sortOption} 
      className="border py-2 px-3 rounded-lg"
    >
      <option value="dateNewestFirst">Date Added: Newest first</option>
      <option value="priceLowHigh">Price: Low to High</option>
      <option value="priceHighLow">Price: High to Low</option>
    </select>
  );
};

export default Sort;