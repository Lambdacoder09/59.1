import React, { useState } from "react";
import CartRow from "./CartRow";
import RedButton from "../RedButton";
import HomepageButton from "../Homepage";
import TextInputBox from "../TextInput";
import CartSummary from "../CartTotal";

function CartList({ cart, setCart }) {
  const rowWidth = "800px";
  const [quantities, setQuantities] = useState({});
  const fetchedProducts = cart; // ✅ fixed name

  // handle quantity changes
  const handleQuantityChange = (id, newQty) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, newQty),
    }));
  };

  // handle remove product
  const handleRemove = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // calculate total
  const total = fetchedProducts.reduce((acc, product) => {
    const qty = quantities[product.id] || 1;
    return acc + product.price * qty;
  }, 0);

  return (
    <div className="flex flex-col justify-center items-center relative w-full min-h-screen">
      {/* 🏠 Home Button */}
      <div className="absolute top-6 left-6">
        <HomepageButton text="Home" />
      </div>

      {/* Header Row */}
      <div
        style={{ width: rowWidth }}
        className="flex items-center bg-white font-bold py-4 px-6 rounded-md border border-gray-200 mt-24"
      >
        <div className="flex items-center justify-center flex-1">
          <h1 className="text-2xl font-bold text-center">Your Cart</h1>
        </div>
        <div className="flex gap-6">
          <div className="w-24 text-center">Price</div>
          <div className="w-24 text-center">Quantity</div>
          <div className="w-24 text-center">Total</div>
        </div>
      </div>

      {/* Product Rows */}
      {fetchedProducts.length > 0 ? (
        fetchedProducts.map((product) => (
          <CartRow
            key={product.id}
            width={rowWidth}
            imageUrl={product.thumbnail}
            title={product.title}
            price={product.price}
            quantity={quantities[product.id] || 1}
            onQuantityChange={(val) => handleQuantityChange(product.id, val)}
            onRemove={() => handleRemove(product.id)}
          />
        ))
      ) : (
        <p className="text-gray-600 text-center mt-4">Your cart is empty 🛒</p>
      )}

      {/* Apply Coupon */}
      <div className="flex gap-2 mt-6 justify-center">
        <TextInputBox
          placeholder="COUPON CODE"
          onChange={(text) => console.log(text)}
        />
        <RedButton text="APPLY COUPON" className="py-2 px-10" />
      </div>

      {/* Cart Summary */}
      <div className="mt-8 mb-8 w-full flex justify-end pr-16">
        <CartSummary total={total.toFixed(2)} />
      </div>
    </div>
  );
}

export default CartList;
