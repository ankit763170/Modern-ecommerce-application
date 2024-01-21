import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

type CartItemType = {
  image: string;
  productId: string;
  name: string;
  price: number;
  quantity: number;
  stock: number;
};

type CartitemProps = {
  cartItem: CartItemType;
};

const Cartitem = ({ cartItem }: CartitemProps) => {
  const { image, productId, name, price, quantity, stock } = cartItem;

  const [qty, setQty] = useState(quantity);

  const handleIncrement = () => {
    if (qty < stock) {
      setQty((prevQty) => prevQty + 1);
    }
  };

  const handleDecrement = () => {
    if (qty > 0) {
      setQty((prevQty) => prevQty - 1);
    }
  };

  return (
    <div className="cart-item">
      <img src={image} alt={name} />
      <article>
        <Link to={`/product/${productId}`}>{name}</Link>
        <span>₹{price}</span>
      </article>
      <div>
        <button onClick={handleIncrement} aria-label="Increment quantity">+</button>
        {qty}
        <button onClick={handleDecrement} aria-label="Decrement quantity">-</button>
      </div>
      <button aria-label="Remove item from cart"><FaTrash /></button>
    </div>
  );
};

export default Cartitem;
