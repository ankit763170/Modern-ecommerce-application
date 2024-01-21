import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { VscError } from "react-icons/vsc";
import CartItem from "../components/Cart-item";

const Cart = () => {
  const [subtotal, setSubtotal] = useState<number>(0);
  const [shippingCharges, setShippingCharges] = useState<number>(0);
  const [tax, setTax] = useState<number>(0);
  const [discount, setDiscount] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const [couponCode, setCouponCode] = useState<string>("");
  const [isValidCouponCode, setIsValidCouponCode] = useState<boolean>(false);

  const cartItems = [
    {
      name: "Apple",
      quantity: 4,
      price: 2.5,
      productId: 'asdfhg',
      image: 'https://healthjade.com/wp-content/uploads/2017/10/apple-fruit.jpg',
      stock: 20,
    }
  ];

  useEffect(() => {
    setSubtotal(100);
    setShippingCharges(10);
    setTax(5);
    setDiscount(20);
    setTotal(subtotal + shippingCharges + tax - discount);

    const timeoutId = setTimeout(() => {
      setIsValidCouponCode(Math.random() > 0.5);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [subtotal, shippingCharges, tax, discount]);

  return (
    <div className="cart">
      <main>
        {cartItems.length > 0 ? (
          cartItems.map((item, idx) => (
            <CartItem key={idx} cartItem={item} />
          ))
        ) : (
          <h1>No Items Added.. please add item </h1>
        )}
      </main>
      <aside>
        <p>Subtotal: ₹{subtotal}</p>
        <p>Shipping Charges: ₹{shippingCharges}</p>
        <p>Tax: ₹{tax}</p>
        <p>
          Discount: <em className="red"> - ₹{discount}</em>
        </p>
        <p>
          <b>Total: ₹{total}</b>
        </p>

        <input
          type="text"
          placeholder="Coupon Code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
        />

        {couponCode &&
          (isValidCouponCode ? (
            <span className="green">
              ₹{discount} off using the <code>{couponCode}</code>
            </span>
          ) : (
            <span className="red">
              Invalid Coupon <VscError />
            </span>
          ))}

        {cartItems.length > 0 && <Link to="/shipping">Checkout</Link>}
      </aside>
    </div>
  );
};

export default Cart;
