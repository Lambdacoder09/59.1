import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RedButton from "./RedButton";

function HomepageButton() {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);

  return (
    <RedButton
      className={`bg-yellow-400 text-black m-2 px-4 py-2 rounded-md font-semibold hover:bg-yellow-300 transition transform ${
        clicked ? "scale-90" : "scale-100"
      }`}
      onClick={() => {
        setClicked(true);
        navigate("/");
      }}
      text="<- Home"
    />
  );
}

export default HomepageButton;
