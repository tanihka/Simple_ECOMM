import "./App.css";
import { useState } from "react";
import Cart from "./component/Cart";
import Header from "./component/header";
import Product from "./component/Product";
import { Route, Routes } from "react-router-dom"

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState([]);
  console.log(cart);
  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }]);
  };

  const handleShow = ( value ) => {
    setShowCart(value)
  }

  return (
    <div >
      <Header count={cart.length} handleShow={handleShow}></Header>
       <Routes >
        <Route path="/cart" element={<Cart cart={cart}></Cart>}/>
       </Routes>
       <Routes >
        <Route path="/" element={<Product addToCart={addToCart}></Product>}/>
       </Routes>
     
    </div>
  );
}

export default App;
