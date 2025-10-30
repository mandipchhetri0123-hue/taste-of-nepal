const express = require('express');
const Food = require('../models/Food');

const router = express.Router();

// Get all foods
router.get('/', async (req, res) => {
  const foods = await Food.find().sort({ createdAt: -1 });
  res.json(foods);
});

// Add new food
router.post('/', async (req, res) => {
  try {
    const food = new Food(req.body);
    await food.save();
    res.json(food);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
