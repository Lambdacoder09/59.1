import React from "react";
import RedButton from "./RedButton"; // your reusable RedButton
import { useNavigate } from "react-router-dom";

function TestPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    alert("Button clicked! ✅");
    navigate("/"); // optional: go back to homepage
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 gap-6">
      <h1 className="text-3xl font-bold">Test Page</h1>
      <p className="text-gray-600">Click the button to test actions.</p>
      <RedButton text="Click Me" onClick={handleClick} />
    </div>
  );
}

export default TestPage;
