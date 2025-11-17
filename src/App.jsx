import DescPage from "./assets/components/DescPage.jsx";
import "./App.css";
import GalleryPage from "./assets/components/GalleryPage";
import Header from "./assets/components/HeaderBar.jsx";
import Footer from "./assets/components/Footer";
import { Routes,Route } from "react-router-dom";
import InfoPage from "./assets/components/InfoPage.jsx";
import CartRow from "./assets/components/Cart/CartRow.jsx";
import CartList from "./assets/components/Cart/CartList.jsx";
import TestPage from "./assets/components/TestPage.jsx";
import CartPage from "./assets/components/Cart/CartPage.jsx";
import { useState } from "react";
function App() {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
  setCart((prevCart) => {
    const existingProduct = prevCart.find((item) => item.id === product.id);
    if (existingProduct) {
      // If product already in cart, update quantity
      return prevCart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      // If product not in cart, add it with quantity = 1
      return [...prevCart, { ...product, quantity: 1 }];
    }
  });
};

  return (<>
  <Header/>
  
  <div className="">
  <Routes>
    <Route path="/" element={<GalleryPage cart={cart} addToCart={addToCart} /> } />
        <Route path="/InfoPage" element={<InfoPage/>} />
        <Route path="/CartPage" element={<CartPage cart={cart} setCart={setCart} />} />
        <Route path="/:id" element={<DescPage />} />


  </Routes>
  </div>
  <Footer/>
     

  </>);
}

export default App;
