import React from "react";
import { useNavigate } from "react-router-dom";
import RedButton from "./RedButton";
function HomepageButton() {
  const navigate = useNavigate();

  return (
    <RedButton className=" "
      onClick={() => navigate("/")}
      text={"<- Home"}
    >
      Homepage
    </RedButton>
  );
}

export default HomepageButton;

