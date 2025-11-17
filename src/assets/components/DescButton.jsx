import { Link } from "react-router-dom";
import { useState } from "react";

function DescButton({ id }) {
  const [clicked, setClicked] = useState(false);

  return (
    <Link
      to={`/${id}`}
      onClick={() => setClicked(true)}
      className={`bg-yellow-400 text-black m-2 px-4 py-2 rounded-md font-semibold hover:bg-yellow-300 transition transform ${
        clicked ? "scale-90" : "scale-100"
      }`}
    >
      View Details
    </Link>
  );
}

export default DescButton;
