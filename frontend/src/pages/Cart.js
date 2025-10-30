// src/pages/Cart.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Cart() {
  const [cart, setCart] = useState([]);
  useEffect(()=> setCart(JSON.parse(localStorage.getItem('cart') || '[]')), []);

  const placeOrder = async () => {
    const name = prompt('Your name?');
    const address = prompt('Delivery address?');
    if (!name || !address) return alert('Provide details');

    const order = { customerName: name, address, items: cart, total: cart.reduce((s,i)=> s + i.price, 0) };
    try {
      const res = await axios.post('/api/orders', order);
      alert('Order placed: ' + res.data.id);
      localStorage.removeItem('cart');
      setCart([]);
    } catch (err) {
      console.error(err);
      alert('Order failed');
    }
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Your Cart</h2>
      {cart.length === 0 ? <p>Cart empty</p> : (
        <>
          <ul>
            {cart.map((c, idx) => <li key={idx}>{c.name} - ${c.price}</li>)}
          </ul>
          <p>Total: ${cart.reduce((s, i) => s + i.price, 0)}</p>
          <button onClick={placeOrder}>Place Order</button>
        </>
      )}
    </div>
  );
}
