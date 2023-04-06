import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ setCartItem }) => {
  const productList = [
    { name: "Wireless Earbuds", price: 99.99 },
    { name: "Air Fryer", price: 129.99 },
    { name: "Fitness Tracker", price: 59.99 },
    { name: "Electric Toothbrush", price: 79.99 },
    { name: "Portable Bluetooth Speaker", price: 49.99 },
    { name: "Coffee Maker", price: 89.99 },
    { name: "Robot Vacuum Cleaner", price: 299.99 },
    { name: "Smart Home Security Camera", price: 199.99 },
    { name: "Pressure Cooker", price: 69.99 },
    { name: "Hair Dryer", price: 49.99 },
    { name: "Wireless Charger", price: 29.99 },
    { name: "Laptop Backpack", price: 69.99 },
    { name: "Smartphone Gimbal", price: 99.99 },
    { name: "Digital Camera", price: 399.99 },
    { name: "Gaming Headset", price: 79.99 },
    { name: "Portable Power Bank", price: 39.99 },
    { name: "Wireless Mouse", price: 19.99 },
    { name: "External Hard Drive", price: 129.99 },
    { name: "Fitness Smartwatch", price: 149.99 },
    { name: "Blender", price: 59.99 },
    { name: "Electric Kettle", price: 49.99 },
    { name: "Smart Thermostat", price: 199.99 },
    { name: "Smart Speaker", price: 149.99 },
    { name: "Smart TV", price: 599.99 },
    { name: "Desktop Computer", price: 999.99 },
    { name: "Wireless Router", price: 99.99 },
    { name: "Steam Iron", price: 49.99 },
    { name: "Standing Desk", price: 349.99 },
    { name: "Bluetooth Headphones", price: 79.99 },
    { name: "Wireless Security System", price: 399.99 },
    { name: "Digital Picture Frame", price: 129.99 },
  ];

  return (
    <ul>
      {productList?.map((el, i) => {
        return <ProductItem key={i} el={el} setCartItem={setCartItem} />;
      })}
    </ul>
  );
};

export default ProductList;
