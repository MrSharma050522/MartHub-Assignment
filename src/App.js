import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import ProductList from "./Components/ProductList";

export const backendURL = "https://bottom-funnel-assignment.onrender.com";

function App() {
  const [displayListHideCart, setDisplayListHideCart] = useState(true);
  const [cartItem, setCartItem] = useState([]);
  return (
    <div className="App">
      <Header
        showCartFunc={setDisplayListHideCart}
        showCart={displayListHideCart}
        cartItem={cartItem}
        setCartItem={setCartItem}
      />
      {displayListHideCart && <ProductList setCartItem={setCartItem} />}
    </div>
  );
}

export default App;
