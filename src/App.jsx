
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
import { CartProvider } from "./assets/components/Cart/CartContext.jsx";
function App() {
  return (<>
      <CartProvider>

  <Header/>
  <div className=" bg-blue-300">
  <Routes>
    <Route path="/" element={<GalleryPage /> } />
        <Route path="/InfoPage" element={<InfoPage/>} />
        <Route path="/CartPage" element={<CartPage/>} />

  </Routes>
  </div>
  <Footer/>
      </CartProvider>

  </>);
}

export default App;
