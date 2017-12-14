const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const mongoose = require('mongoose');
const multer  = require('multer');
const upload = multer({ dest:'./public/uploads'});
// const isLoggedIn = require('../middlewares/isLoggedIn');


const checkIDParam = (req,res,next) =>{
  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }
  next();
};

//Product list
router.get('/products', (req, res, next) => {
  Product.find()
    .then(productsList => res.status(200).json(productsList))
    .catch(e => res.status(500).json({error:e.message}));
});

//Create new product
router.post('/product/new', (req, res, next) => {
  const {brand, model, description, price, rating, type, image} = req.body;
  const theProduct = new Product({
    brand, model, description, price, rating, type, image,

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
    }));
  })
    .catch( e => res.status(500).json({error:e.message}));
});
//searchTerm
router.get('/products/search', (req, res) => {
let searchTerm = req.query.term;
Product.find({ $or: [ { brand: { $regex: new RegExp(searchTerm), $options: 'i' } }, { model: { $regex: new RegExp(searchTerm), $options: 'i' } } ] })
.then(products => {
  res.status(200).json(products);
});

});

//Get single product by id
router.get('/product/:id', checkIDParam, (req, res) => {
  Product.findById(req.params.id)
    .then(p => res.status(200).json(p))
    .catch(e => res.status(500).json({error:e.message}));
});

//Edit product
router.put('/product/edit/:id', checkIDParam, (req, res) => {
  const productId = req.params.id;
  const updates = req.body;

  Product.findByIdAndUpdate(productId, updates, {new:true})
    .then(p => res.status(200).json(p))
    .catch(e => res.status(500).json({error:e.message}));
});

//Delete product
router.delete('/product/:id/delete', (req, res, next) => {
  Product.findByIdAndRemove({_id: req.params.id})
      .then(p => res.status(200).json(p))
      .catch(e => res.status(500).json({error:e.message}));
});

module.exports = router;
