import React from "react";

export default function CartSummary({total}) {
  return (
    <div className="p-6 border rounded w-80">
      <h3 className="text-xl font-bold mb-3">Cart Total</h3>
      <div className="flex justify-between"><span>Subtotal</span><span>${total}</span></div>
      <div className="mt-4">
        <button className="bg-red-500 text-white px-4 py-2 rounded">Proceed to Checkout</button>
      </div>
    </div>
  );
}
