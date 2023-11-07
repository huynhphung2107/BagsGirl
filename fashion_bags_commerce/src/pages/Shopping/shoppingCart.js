import React, { useState } from 'react';

function ShoppingCart() {
  const [cart, setCart] = useState([]);

  // Function to add items to the cart
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  // Function to remove an item from the cart
  const removeFromCart = (item) => {
    const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
    setCart(updatedCart);
  };

  // Function to update the quantity of an item in the cart
  const updateQuantity = (item, newQuantity) => {
    const updatedCart = cart.map((cartItem) => {
      if (cartItem.id === item.id) {
        return { ...cartItem, quantity: newQuantity };
      }
      return cartItem;
    });
    setCart(updatedCart);
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cart.map((item) => (
        <div key={item.id}>
          <span>{item.name}</span>
          <span>Quantity: {item.quantity}</span>
          <span>Price: ${item.price}</span>
          <button onClick={() => removeFromCart(item)}>Remove</button>
          <button onClick={() => updateQuantity(item, item.quantity + 1)}>+</button>
          <button onClick={() => updateQuantity(item, item.quantity - 1)}>-</button>
        </div>
      ))}
      <div>
        Total Price: ${cart.reduce((total, item) => total + item.price * item.quantity, 0)}
      </div>
      <button>Checkout</button>
    </div>
  );
}

export default ShoppingCart;
