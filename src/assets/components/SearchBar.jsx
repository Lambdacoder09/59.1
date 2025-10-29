import React from "react";

function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <input
      type="text"
      placeholder="Search by title or category..."
      className=" border border-gray-300 rounded-2xl px-4 py-2 w-80 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
    />
  );
}

export default SearchBar;
