import React from "react";

const Loading = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <style>
        {`
          @keyframes l4 {
            to { clip-path: inset(0 -1ch 0 0); }
          }
        `}
      </style>

      <div
        className="text-md md: text-8xl font-bold font-mono w-fit [clip-path:inset(0_3ch_0_0)] animate-[l4_1s_steps(4)_infinite] before:content-['Loading...']"
      ></div>
    </div>
  );
};

export default Loading;
