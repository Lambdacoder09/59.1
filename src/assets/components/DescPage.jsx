import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./Loading";
import DescCard from "./DescCard";
import HomepageButton from "./Homepage";
function DescPage({ addToCart }) {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setProducts(res.data.products);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <Loading />;

  const card = products.find((p) => p.id === Number(id));

  if (!card)
    return <div className="text-white text-center mt-10">Product Not Found</div>;

  return <div className="bg-amber-100">
    <HomepageButton/>

    <DescCard product={card} addToCart={addToCart} /></div>;
}

export default DescPage;
