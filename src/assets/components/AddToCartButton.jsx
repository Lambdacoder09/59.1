import React, { useState } from "react";

export default function AddToCart({ addToCart, product }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    addToCart(product);
    setTimeout(() => setClicked(false), 200); // reset after animation
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={handleClick}
        className={`bg-yellow-400 text-black m-2 px-4 py-2 rounded-md font-semibold hover:bg-yellow-300 transition transform ${
          clicked ? "scale-90" : "scale-100"
        }`}
      >
        Add to Cart
      </button>
    </div>
  );
}
