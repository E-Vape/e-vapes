const express = require('express');
const router = express.Router();
const Review = require('../models/Review');
const mongoose = require('mongoose');

const checkIDParam = (req,res,next) =>{
  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }
  next();
};

//Review list
router.get('/reviews', (req, res, next) => {
  Review.find()
    .then(reviewsList => res.status(200).json(reviewsList))
    .catch(e => res.status(500).json({error:e.message}));
});


//Create new review
router.post('/products/:id', (req, res, next) => {
  const theReview = new Review({
    author: req.user._id,
    text: req.body.review,
    product: req.params.id
  });
  theReview.save()
    .then( p => res.status(200).json({
      message: 'New Review created!',
      review: p
    }))

    .catch( e => {
      console.log(e)
      res.status(500).json({error:e.message})
    });
});

//Get single review by id
router.get('/reviews/:id', checkIDParam, (req, res) => {
  Review.findById(req.params.id)
    .then(p => res.status(200).json(p))
    .catch(e => res.status(500).json({error:e.message}));
});

//Edit review
router.put('/reviews/:id', checkIDParam, (req, res) => {
  const {product, author, text} = req.body;
  const updates = {product, author, text};

  Review.findByIdAndUpdate(req.params.id, updates, {new:true})
    .then(p => res.status(200).json(p))
    .catch(e => res.status(500).json({error:e.message}));
});

//Delete review
router.delete('/reviews/:id',checkIDParam, (req, res) => {
  Review.findByIdAndRemove(req.params.id)
      .then(p => res.status(200).json(p))
      .catch(e => res.status(500).json({error:e.message}));
});

//Get reviews from product ID
router.get('/products/:id', (req, res, next) => {
  console.log('entrando en este get de product id show reviews')
  Review.find({product:req.params.id})
  .populate('author')
  .then(p => res.status(200).json(p))
  .catch(e => res.status(500).json({error:e.message}));
});

module.exports = router;
