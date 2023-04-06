import React, { useEffect } from "react";
import CartComponent from "./CartComponent";
import { backendURL } from "../App";

const Header = ({ showCartFunc, showCart, cartItem, setCartItem }) => {
  const cartClickHandler = () => {
    showCartFunc((show) => !show);
  };

  useEffect(() => {
    const fetchHandler = () => {
      // console.log("inside use effect");
      fetch(`${backendURL}/product/allproducts`)
        .then((res) => res.json())
        .then((data) => {
          // console.log(data.products);
          setCartItem(data.products);
        });
    };
    fetchHandler();
  }, [setCartItem]);
  return (
    <nav>
      <button
        onClick={cartClickHandler}
        style={{
          background: "blue",
          borderRadius: "5px",
          padding: "5px 5px 5px 5px",
          color: "white",
        }}
      >
        Header Cart Button
      </button>
      {!showCart && (
        <CartComponent cartItem={cartItem} setCartItem={setCartItem} />
      )}
    </nav>
  );
};

export default Header;
