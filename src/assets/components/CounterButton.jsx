import React from "react";

function CounterButton({ num, onIncrement }) {
  return (
    <button onClick={() => onIncrement(num)} className="bg-red-500 text-white   text-2xl px-8 py-4 rounded-xl shadow-md">
      Add to Cart
    </button>
  );
}

export default CounterButton;
