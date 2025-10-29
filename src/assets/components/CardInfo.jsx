import React, { useState } from "react";
import CounterButton from "./CounterButton"; // import your button component

function DisplayInfo({ title, description, price, img }) {
  const [num, setNum] = useState(0);
  title="Black coffee Mug"
  description="This is a sample product description for the black coffee mug. It is stylish and perfect for your daily coffee needs. "
  price="$19.99"
  img="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRvSZ_Fh5C3EgX0lJfo9EUu3-Js-oWusMJoXPaE3DaJPsNaVmQ2tZHB0CeVCAe2j0M6H7rM7QmbJWt8H1kFf7czHAu6Gp-BLIKN_fJc15S_Szl2DMKnBMuT3CEu"

  return (
    <div className="border-2 p-10 rounded-3xl shadow-lg w-[800px] h-auto flex bg-white">
      {/* Product Image */}
      <img
        src={img}
        alt={title}
        className="w-72 h-72 object-cover rounded-2xl"
      />

      {/* Product Info */}
      <div className="flex flex-col ml-10 text-left justify-start">
        <h2 className="text-4xl font-extrabold mb-3">{title}</h2>
        <h3 className="text-3xl font-semibold text-green-600 mb-4">{price}</h3>
        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          {description}
        </p>

        {/* Counter section */}
        <div className="flex items-center gap-6 mt-auto">
          <span className="text-3xl text-red-600 py-2 px-5 border-4 rounded-xl font-semibold">
            {num}
          </span>

          <CounterButton num={1} onIncrement={(value) => setNum(num + value)} />
        </div>
      </div>
    </div>
  );
}

export default DisplayInfo;
