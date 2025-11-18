import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./Loading";
import DescCard from "./DescCard";
import HomepageButton from "./Homepage";

function DescPage({ addToCart }) {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Loading />;

  if (error || !product)
    return <div className="text-white text-center">Product Not Found</div>;

  return (
    <div className="bg-amber-100 min-h-screen p-4">
      <HomepageButton />
      <DescCard product={product} addToCart={addToCart} />
    </div>
  );
}

export default DescPage;
