const express = require('express');
const router = express.Router();

// temporary in-memory orders list
let orders = [];

// Place order
router.post('/', (req, res) => {
  const order = { id: Date.now(), ...req.body, status: 'Placed' };
  orders.push(order);
  res.json(order);
});

// Get all orders
router.get('/', (req, res) => {
  res.json(orders);
});

module.exports = router;
