import React, { useState, useRef, useEffect } from "react";
import { useCart } from "./Cart/CartContext";

export default function AddToCart({ product }) {
  const { addToCart } = useCart();
  const [showAlert, setShowAlert] = useState(false);
  const timeoutRef = useRef(null);

  const handleAdd = () => {
    addToCart(product);
    setShowAlert(true);
    // clear previous timeout if any
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setShowAlert(false), 2000);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="relative inline-block ">
      <button
        onClick={handleAdd}
        className="bg-yellow-400 text-black m-2 px-4 py-2 rounded-md font-semibold hover:bg-yellow-300 transition"
      >
        Add to Cart
      </button>

      {showAlert && (
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-green-600 text-white text-sm px-3 py-1 rounded shadow">
          ✅ Added to cart
        </div>
      )}
    </div>
  );
}
