import React from "react";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  return (
    <ul className="flex justify-center space-x-1 mt-4">
      <li>
        <button
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
          className={`h-8 px-4 font-bold transition-colors duration-150 bg-primary text-white border border-gray-500 rounded-l-lg focus:shadow-outline hover:bg-gray-700 ${
            currentPage === 1 ? "text-gray-400" : "text-white"
          }`}
        >
          First
        </button>
      </li>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <li key={page}>
          <button
            onClick={() => onPageChange(page)}
            className={`h-8 px-4 font-bold transition-colors duration-150 border border-gray-500 ${
              currentPage === page
                ? "text-primary bg-white"
                : "text-white bg-primary hover:bg-gray-700"
            }`}
          >
            {page}
          </button>
        </li>
      ))}
      <li>
        <button
          onClick={() => onPageChange(totalPages)}
          disabled={currentPage === totalPages}
          className={`h-8 px-4 font-bold transition-colors duration-150 bg-primary text-white border border-gray-500 rounded-r-lg focus:shadow-outline hover:bg-gray-700 ${
            currentPage === totalPages ? "text-gray-400" : "text-white"
          }`}
        >
          Last
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
