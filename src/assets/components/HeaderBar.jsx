import React from "react";
import { Link } from "react-router";
function Header() {
  return (
    <div className="flex items-center justify-between bg-white p-4 h-20">
      <img src="/vite.svg" alt="Vite logo" className="w-20 h-20 p-4 ml-10" />

       <Link 
          to="/CartPage"
          className="bg-yellow-400 text-black m-2 px-4 py-2 rounded-md font-semibold hover:bg-yellow-300 transition "
        >
          Test Page
        </Link>
  );
    </div>
  );
}

export default Header;
