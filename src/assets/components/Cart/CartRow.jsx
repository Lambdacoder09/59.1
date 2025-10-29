import { useState, useEffect } from "react";

function CartRow({
  width = "800px",
  imageUrl,
  title,
  price,
  quantity = 1,
  onQuantityChange, // callback from parent
}) {
  const [count, setCount] = useState(quantity);

  // Notify parent whenever quantity changes
  useEffect(() => {
    if (onQuantityChange) {
      onQuantityChange(count);
    }
  }, [count]);

  return (
    <div className="flex justify-center">
      <div
        style={{ width }}
        className="flex items-center gap-4 bg-gray-200 rounded-lg p-4 shadow-sm"
      >
        {/* Product Image */}
        <img
          className="w-20 h-20 object-cover rounded-md"
          src={imageUrl}
          alt={title}
        />

        {/* Title */}
        <p className="text-red-400 text-lg font-bold flex-1">{title}</p>

        {/* Price */}
        <p className="font-bold text-lg w-24 text-center">${price}</p>

        {/* Quantity Input */}
        <input
          type="number"
          min={0}
          value={count}
          onChange={(e) => setCount(Math.max(0, Number(e.target.value)))}
          className="border text-center py-1 w-20 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
        />

        {/* Total */}
        <p className="font-bold text-lg w-24 text-center">
          ${(price * count).toFixed(2)}
        </p>
      </div>
    </div>
  );
}

export default CartRow;
