import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex items-center justify-between bg-white p-2 md:p-4 h-16 md:h-20">
      <Link to="/">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/905px-Amazon_logo.svg.png?20250504041148" 
          alt="Amazon logo" 
          className="h-10 md:h-16 ml-4 md:ml-20" 
        />
      </Link>

      <Link 
        to="/CartPage"
        className="bg-yellow-400 text-black m-2 px-4 py-2 rounded-md font-semibold hover:bg-yellow-300 transition"
      >
       Cart 🛒
      </Link>
    </div>
  );
}

export default Header;
