import React from "react";
import { Link } from "react-router-dom";

function DescCard({ product }) {
  return (
    <div className=" max-w-4xl  mx-auto bg-white p-6 rounded-xl shadow-lg flex flex-col md:flex-row gap-8 mt-6">

      {/* Product Image */}
      <div className="flex-1 flex justify-center">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full max-w-sm object-contain rounded-lg"
        />
      </div>

      {/* Product Info */}
      <div className="flex-1 flex flex-col justify-between">

        <div>
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          <p className="text-gray-500 mb-4 capitalize">{product.category}</p>

          <p className="text-gray-700 mb-4">{product.description}</p>

          <p className="text-2xl font-semibold text-green-600 mb-2">
            ${product.price}
          </p>

          <p className="text-sm text-gray-600">⭐ Rating: {product.rating} / 5</p>
          <p className="text-sm text-gray-600">Stock: {product.stock}</p>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-6">

         

          {/* Prev Button (only if id > 1) */}
          <Link
  to={product.id > 1 ? `/${product.id - 1}` : "#"}
  className={`font-semibold ${
    product.id > 1 ? "text-blue-600 hover:underline" : "text-gray-400 cursor-not-allowed"
  }`}
>
  Prev
</Link>


          {/* Next Button */}
          <Link
            to={`/${product.id + 1}`}
            className="text-blue-600 font-semibold hover:underline"
          >
            Next
          </Link>
        </div>

      </div>
    </div>
  );
}

export default DescCard;
