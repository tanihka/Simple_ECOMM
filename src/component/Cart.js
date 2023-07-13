import React, { useEffect, useState } from "react";

const Cart = ({ cart }) => {
  const [dart, setDart] = useState([]);
  useEffect(() => {
    setDart(cart);
  }, [cart]);

  return (
    <div>
      {dart?.map((cartItem, cartIndex) => {
        return (
          <div>
            <img src={cartItem.image} width={40} />
            <span> {cartItem.title} </span>
            <button  onClick={() => {
                const _cart = dart.map((item, index) => {
                  return cartIndex === index
                    ? { ...item, quantity: item.quantity - 1 }
                    : item;
                });
                setDart(_cart);
              }}>-</button>
            <span> {cartItem.quantity} </span>
            <button
              onClick={() => {
                const _cart = dart.map((item, index) => {
                  return cartIndex === index
                    ? { ...item, quantity: item.quantity + 1 }
                    : item;
                });
                setDart(_cart);
              }}
            >
              +
            </button>
            <span> {cartItem.price * cartItem.quantity} </span>
          </div>
        );
      })}

      <div style={{ margin: "50px" }}>
        Total:{" "}
        <span style={{ color: "red" }}>
          Rs.{" "}
          {dart
            .map((item) => item.price * item.quantity)
            .reduce((total, value) => total + value, 0)}{" "}
          /-
        </span>
        <button>proceed to pay</button>
      </div>
    </div>
  );
};

export default Cart;
