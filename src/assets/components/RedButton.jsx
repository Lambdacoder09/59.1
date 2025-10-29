import React from "react";

function RedButton({ text, className = "", onClick }) {
  return (
    <button
      onClick={onClick}
      className={`bg-red-500 hover:bg-red-600 text-white text-xl py-2 px-6 rounded-xl shadow-md transition-all duration-200 active:scale-95 ${className}`}
    >
      {text}
    </button>
  );
}

export default RedButton;
