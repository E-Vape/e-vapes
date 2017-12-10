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
  Product.find()
    .then(productsList => res.status(200).json(productsList))
    .catch(e => res.status(500).json({error:e.message}));
});

//Create new product
router.post('/product/new', (req, res, next) => {
  console.log(req.body)
  const {brand, model, image, description, price, rating, type } = req.body;
  const theProduct = new Product({
    brand, model, image, description, price, rating, type
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
router.get('/product/:id', checkIDParam, (req, res) => {
  Product.findById(req.params.id)
    .then(p => res.status(200).json(p))
    .catch(e => res.status(500).json({error:e.message}));
});

//Edit product
router.put('/product/edit/:id', checkIDParam, (req, res) => {
  const productId = req.params.id;
  const updates = req.body;
  console.log('SOY UPDATE');
  console.log(updates);

  Product.findByIdAndUpdate(productId, updates, {new:true})
    .then(p => res.status(200).json(p))
    .catch(e => res.status(500).json({error:e.message}));
});
// router.put('/product/edit/:id', checkIDParam, (req, res, next) => {
// const {brand, model, description, price, rating, image, category, subcategory} = req.body
// Product.findByIdAndUpdate({_id: req.params.id}, {
//   $set: {
//     brand: brand,
//     model: model,
//     description: description,
//     price: price,
//     rating: rating,
//     image: image,
//     category: category,
//     subcategory: subcategory,
//   }}, {new:true}).exec()
//   .then(p => res.status(200).json(p))
//   .catch(e => res.status(500).json({error:e.message}))
// })
//Delete product
//checkIDParam,
router.delete('/product/:id/delete', (req, res, next) => {
  Product.findByIdAndRemove({_id: req.params.id})
      .then(p => res.status(200).json(p))
      .catch(e => res.status(500).json({error:e.message}));
});

module.exports = router;
