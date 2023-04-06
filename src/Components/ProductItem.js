import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { backendURL } from "../App";

const ProductItem = (props) => {
  const addToCartHandler = (event) => {
    toast.success(`${event.target.innerText} was added to Cart`);

    // console.log(props.el);
    fetch(`${backendURL}/product/addproduct`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: props.el.name,
        price: props.el.price,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        props?.setCartItem((items) => [...items, data.product]);
      });
  };
  return (
    <li
      style={{
        border: "1px solid black",
        margin: "20px 10px 20px 10px",
        listStyle: "none",
        cursor: "pointer",
        background: "aqua",
        padding: "5px 5px 5px 5px",
        borderRadius: "5px",
        boxShadow: "2px 5px 10px red",
      }}
    >
      <p onClick={addToCartHandler}>{props.el.name}</p>
      <p>{props.el.price}</p>
      <ToastContainer position="bottom-right" />
    </li>
  );
};

export default ProductItem;
