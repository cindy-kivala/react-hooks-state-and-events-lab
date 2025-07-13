import React, { useState } from "react";

function Item({ name, category }) {
    // 1. Add state to track whether the item is in the cart
  const [isInCart, setIsInCart] = useState(false);

  // 2. Set the <li> class based on the state
  const liClass = isInCart ? "in-cart" : "";

  // 3. Handle button click to toggle cart state
  function handleAddToCartClick() {
    setIsInCart(!isInCart);
  }

  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleAddToCartClick}>
        {isInCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
