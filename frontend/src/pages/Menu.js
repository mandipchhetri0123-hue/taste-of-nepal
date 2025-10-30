// src/pages/Menu.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Menu() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    axios.get('/api/foods').then(res => setFoods(res.data)).catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Menu</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
        {foods.map(f => (
          <div key={f._id} style={{ border: '1px solid #eee', padding: '0.5rem' }}>
            <img src={f.image} alt={f.name} style={{ width: '100%', height: 150, objectFit: 'cover' }} />
            <h4>{f.name}</h4>
            <p>{f.description}</p>
            <p>${f.price}</p>
            <button onClick={() => {
              const cart = JSON.parse(localStorage.getItem('cart') || '[]');
              cart.push(f);
              localStorage.setItem('cart', JSON.stringify(cart));
              alert('Added to cart');
            }}>Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
