import React from "react";
import CartItem from "./CartItem";

const CartComponent = ({ cartItem, setCartItem }) => {
  const submitOrderHandler = () => {
    console.log(cartItem);
  };
  return (
    <div>
      {cartItem &&
        cartItem.map((el, i) => {
          return (
            <CartItem
              key={i}
              I
              el={el}
              cartItem={cartItem}
              setCartItem={setCartItem}
            />
          );
        })}
      <button onClick={submitOrderHandler}>Submit Order</button>
    </div>
  );
};

export default CartComponent;
