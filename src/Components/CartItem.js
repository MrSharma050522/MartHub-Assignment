import React from "react";
import { backendURL } from "../App";

const CartItem = (props) => {
  const removeProductHandler = (_id) => {
    fetch(`${backendURL}/product/delete/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
      });
  };

  const deleteFromCartHandler = (event) => {
    const arr = props.cartItem.filter((el) => el._id !== props.el._id);
    props.setCartItem(arr);
    removeProductHandler(props.el._id);

    // console.log(props.el);
  };

  return (
    <div
      style={{
        margin: "5px 5px 5px 5px",
        padding: "5px 5px 5px 5px",
        border: "1px solid grey",
        borderRadius: "5px",
        background: "aqua",
        boxShadow: "2px 5px 10px grey",
      }}
    >
      <div>{props.el.name}</div>

      <button id={props.el._id} onClick={deleteFromCartHandler}>
        &#128465;
      </button>
    </div>
  );
};

export default CartItem;
