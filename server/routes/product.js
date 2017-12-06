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
  .then( request => {res.json({
    message: 'New Product created!',
    brand: newProduct.brand,
    id: newProduct._id,
    price: newProduct.price,
    category: newProduct.category,
  //subcategory: newProduct.subcategory
});})
  .catch( err => {res.json(err); });
});


// Edit Product
router.put('/product/:id' , (req, res) => {
  const {brand, model, category, image, description, price, rating} = req.body;
  const updates = {brand, model, category, image, description, price, rating};

  Product.findByIdAndUpdate(req.params.id, updates, {new:true})
    .then(p => res.status(200).json(p))
    .catch(e => res.status(500).json({error:e.message}));
});

// Delete Product
router.delete('/product/:id', (req, res) => {
  Product.findByIdAndRemove(req.params.id)
      .then(p => res.status(200).json(p))
      .catch(e => res.status(500).json({error:e.message}));
});

module.exports = router;
