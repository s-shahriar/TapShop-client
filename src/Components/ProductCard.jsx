import React from "react";
import { FaStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const { ProductImage, ProductName, Description, Price, Category, Ratings, ProductCreationDate, Brand } = product;
  
  return (
    <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      <img
        src={ProductImage}
        alt={ProductName}
        className="h-60 w-full object-cover rounded-t-xl"
      />
      <div className="px-4 py-3">
        <div className="flex justify-between items-center">
          <span className="text-gray-400 uppercase text-xs">{Category}</span>
          <span className="text-xs text-gray-400">
            {new Date(ProductCreationDate).toLocaleDateString()}
          </span>
        </div>
        <p className="text-lg font-bold text-black capitalize mt-1">
          {ProductName}
        </p>
        <p className="text-gray-700 text-sm mt-1">{Description}</p>
        <p className="text-gray-900 text-sm mt-2 font-semibold">Brand: {Brand}</p>
        <div className="flex items-center mt-3">
          <p className="text-lg font-semibold text-black">${Price}</p>
          <div className="flex ml-auto">
            {Array.from({ length: 5 }, (_, i) => (
              <FaStar
                key={i}
                className={i < Ratings ? "text-yellow-500" : "text-gray-300"}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
