const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const mongoose = require('mongoose');


//Create new product
router.post('/product', (req, res, next) => {
  const newProduct = new Product({
    brand: req.body.brand,
    model: req.body.model,
    category: req.body.category,
    // subcategory: req.body.subcategory,
    image: req.body.image,
    description: req.body.description,
    price: req.body.price,
    rating: req.body.rating,

  });


	newProduct.save()
  .then( request => {res.json({ message: 'New Product created!', id: newProduct._id, price: newProduct.price, category: newProduct.category
  // , subcategory: newProduct.subcategory
});})
  .catch( err => {res.json(err); });

});

module.exports = router;
