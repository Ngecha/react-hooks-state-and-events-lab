import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setCart]=useState(false)
  const changeToCart = inCart ? "in-cart" : "" 
  const buttonClass = inCart ? "remove" : "add"
  // const buttonName = inCart ? "Remove From Cart": "Add To Cart"
  
  function addToCart(){
    setCart((inCart) => !inCart)

  }
  return (
    <li className={changeToCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={addToCart} className={buttonClass}>{inCart ? "Remove From Cart": "Add To Cart"}</button>
    </li>
  );
}

export default Item;
