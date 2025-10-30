// src/components/FoodCard.js
import React from 'react';

export default function FoodCard({ food, onAddToCart }) {
  return (
    <div style={{ border: '1px solid #eee', padding: '0.5rem' }}>
      <img
        src={food.image}
        alt={food.name}
        style={{ width: '100%', height: 150, objectFit: 'cover' }}
      />
      <h4>{food.name}</h4>
      <p>{food.description}</p>
      <p>${food.price}</p>
      <button onClick={() => onAddToCart(food)}>Add to cart</button>
    </div>
  );
}
