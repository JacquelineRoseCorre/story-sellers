import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Cart } from "./pages/cart/cart";
import { Browse } from "./pages/browse/browse";
import { About } from "./pages/about/about";
import { ShopContextProvider } from "./context/shop-context";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
