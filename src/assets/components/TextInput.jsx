import React, { useState } from "react";

function TextInputBox({ placeholder = "Type here...", onChange, rowWidth = "200px" }) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    if (onChange) onChange(e.target.value);
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      className={`p-2 border-2 rounded-lg  border-amber-400 focus:outline-none focus:ring-2 focus:ring-blue-500`}
      style={{ width: rowWidth }} // dynamic width applied via inline style
    />
  );
}

export default TextInputBox;
