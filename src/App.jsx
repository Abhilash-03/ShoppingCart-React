import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { CartProvider } from "./context/CartContext";
import Category from "./components/Category";

function App() {
  return (
    <>
    <CartProvider>
       <Router>
       <Navbar/>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/category" exact element={<Category />} />
            <Route path="/cart/products" exact element={<Cart />} />
          </Routes>
        </Router>
    </CartProvider>
    </>
  )
}

export default App
