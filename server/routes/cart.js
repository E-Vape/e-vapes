const express = require('express');
const router = express.Router();
const cart = require('../models/Cart');
const Product = require('../models/Product');
const User = require('../models/User');
const mongoose = require('mongoose');

const checkIDParam = (req,res,next) =>{
  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }
  next();
};


//Create new cart
router.post('/cart', (req, res, next) => {
  const {user, products, totalPrice, status} = req.body;
  const theCart = new Cart({
    user, products, totalPrice, status
  });


  theCart.save()
    .then(c => res.status(200).json({
      message: 'New Cart created!',
      cart: c
    }))
    .catch( e => res.status(500).json({error:e.message}));
});

//Edit cart
router.put('/cart/:id', checkIDParam, (req, res) => {
  const {user, products, totalPrice, status} = req.body;
  const updates = {user, products, totalPrice, status};

  Product.findByIdAndUpdate(req.params.id, updates, {new:true})
    .then(p => res.status(200).json(p))
    .catch(e => res.status(500).json({error:e.message}));
});

//Delete cart
router.delete('/cart/:id',checkIDParam, (req, res) => {
  Product.findByIdAndRemove(req.params.id)
      .then(p => res.status(200).json(p))
      .catch(e => res.status(500).json({error:e.message}));
});

module.exports = router;
