import React from "react";

export default function SortingMenu({ onSortChange }) {
  return (
    <div className="mb-4 max-w-full overflow-hidden min-w-0 ">
      <select
        onChange={(e) => onSortChange(e.target.value)}
        defaultValue=""
        className="w-full sm: p-2 border border-gray-300 rounded-2xl shadow-sm text-sm sm:text-base"
      >
        <option value="">Default Sorting</option>
        <option value="price">Price (Ascending)</option>
        <option value="name">Name (A-Z)</option>
      </select>
    </div>
  );
}
