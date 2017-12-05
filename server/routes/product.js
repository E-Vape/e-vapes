const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const mongoose = require('mongoose');




router.post('/product', (req, res, next) => {
  const newProduct = new Product({
    brand: req.body.brand,
    model: req.body.model,
    categories: req.body.categories,
    image: req.body.image,
    description: req.body.description,
    price: req.body.price,
    rating: req.body.rating,
  });


	newProduct.save()
  .then( request => {res.json({ message: 'New Product created!', id: newProduct._id, price: newProduct.price, categories: newProduct.categories});})
  .catch( err => {res.json(err); });

});

module.exports = router;
