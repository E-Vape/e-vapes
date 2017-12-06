const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const mongoose = require('mongoose');

const checkIDParam = (req,res,next) =>{
  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }
  next();
};

//Product list
router.get('/products', (req, res, next) => {
  console.log("GET PRODUCTS");
  Product.find()
    .then(productsList => res.status(200).json(productsList))
    .catch(e => res.status(500).json({error:e.message}));
});

//Create new product
router.post('/products', (req, res, next) => {
  const {brand, model, image, description, price, rating, category} = req.body;
  const theProduct = new Product({
    brand, model, image, description, price, rating, category
  });

  Product.findOne({ model }, '_id')
  .then(product => {
    if (product) {
      res.status(400).json({ message: 'The product already exists' });
      return;
    }
  theProduct.save()
    .then( p => res.status(200).json({
      message: 'New Product created!',
      product: p
    }))
  })
    .catch( e => res.status(500).json({error:e.message}));
});

//Get single product by id
router.get('/products/:id', checkIDParam, (req, res) => {
  Product.findById(req.params.id)
    .then(p => res.status(200).json(p))
    .catch(e => res.status(500).json({error:e.message}));
});

//Edit product
router.put('/products/:id', checkIDParam, (req, res) => {
  const {brand, model, image, description, price, rating, category} = req.body;
  const updates = {brand, model, image, description, price, rating, category};

  Product.findByIdAndUpdate(req.params.id, updates, {new:true})
    .then(p => res.status(200).json(p))
    .catch(e => res.status(500).json({error:e.message}));
});

//Delete product
router.delete('/products/:id',checkIDParam, (req, res) => {
  Product.findByIdAndRemove(req.params.id)
      .then(p => res.status(200).json(p))
      .catch(e => res.status(500).json({error:e.message}));
});

module.exports = router;
