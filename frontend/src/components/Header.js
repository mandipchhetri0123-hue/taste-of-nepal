// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header style={{ padding: '1rem', borderBottom: '1px solid #ddd' }}>
      <Link to="/"><strong>Taste of Nepal</strong></Link> | 
      <Link to="/menu" style={{ marginLeft: '1rem' }}>Menu</Link> |
      <Link to="/cart" style={{ marginLeft: '1rem' }}>Cart</Link>
    </header>
  );
}
