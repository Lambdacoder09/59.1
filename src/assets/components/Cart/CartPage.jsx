import React from "react";
import CartList from "./CartList";

function CartPage({cart , setCart}) {
  return (
    <div className="flex justify-center items-center bg-gray-100 min-h-screen">
      {/* White Rounded Container */}
      <div className="bg-white rounded-2xl shadow-lg p-10 w-[900px] my-10">
        <CartList cart={cart} setCart={setCart} />
      </div>
    </div>
  );
}

export default CartPage;
