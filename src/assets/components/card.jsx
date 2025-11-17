import React from "react";
import AddToCart from "./AddToCartButton";
import DescButton from "./DescButton";
function Card({ title, imageUrl, category, price, product, addToCart }) {
  return (
    <div className="flex flex-col justify-between bg-white rounded-xl shadow-md shadow-neutral-300 w-full max-w-xs p-4 transition-transform transform hover:scale-105">
      {/* Image */}
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-contain mb-3"
      />

      {/* Info */}
      <div className="grow">
        <p className="text-gray-500 text-sm mb-1">{category}</p>
        <h2 className="font-bold text-lg mb-2 line-clamp-1">{title}</h2>
        <p className="text-gray-700 font-semibold">${price}</p>
      </div>



      {/* Add to Cart */}
      <div className="mt-4 flex justify-center gap-3">
  <AddToCart product={product} addToCart={addToCart} />
  <DescButton id={product.id} />
</div>

    </div>
  );
}

export default Card;
