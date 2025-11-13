import { useState, useEffect } from "react";
import Card from "./card.jsx";
import "../../../src/App.css";
import SearchBar from "./SearchBar.jsx";
import SortingMenu from "./SortingMenu.jsx";
import axios from "axios";
import Loading from "./Loading.jsx";

export default function GalleryPage({addToCart}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://dummyjson.com/products")
      .then((res) => {
        setProducts(res.data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;

  const filteredCards = products.filter(
    (card) =>
      card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedCards = [...filteredCards].sort((a, b) => {
    if (sortOption === "price") return Number(a.price) - Number(b.price);
    if (sortOption === "name") return a.title.localeCompare(b.title);
    return 0;
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  bg-gray-100 p-8 sm:p-16">
      <div className="w-full max-w-6xl flex flex-col gap-6 items-center">
        <div className="flex flex-col  bg-white p-6 rounded-lg shadow-md w-full sm:w-10/12">
          {/* Search + Sort Section */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mb-6 w-full">
            <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
            <SortingMenu onSortChange={setSortOption} />
          </div>

          {/* ✅ Fixed Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full place-items-center px-4">
  {sortedCards.map((card) => (
    <Card
      product={card}
      addToCart={addToCart}
      key={card.id}
      title={card.title}
      description={card.description}
      category={card.category}
      price={card.price}
      imageUrl={card.thumbnail}
    />
  ))}
</div>



        </div>
      </div>
    </div>
  );
}
