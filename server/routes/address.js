const express = require('express');
const router = express.Router();
const Address = require('../models/Address');
const mongoose = require('mongoose');

const checkIDParam = (req,res,next) =>{
  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }
  next();
};

//Address list
// router.get('/address', (req, res, next) => {
//   Address.find()
//     .then(addressList => res.status(200).json(addressList))
//     .catch(e => res.status(500).json({error:e.message}));
// });

//Create new address
router.post('/address', (req, res, next) => {
  const {user, street, number, place, zipCode, province, city, country} = req.body;
  const theAddress= new Address({ user, street, number, place, zipCode, province, city, country});

    theAddress.save()
    .then( p => res.status(200).json({message: 'New Address added!', address: p}))
    .catch( e => res.status(500).json({error:e.message}));
});

//Get single address by id
router.get('/address/:id', checkIDParam, (req, res) => {
  Address.findById(req.params.id)
    .then(p => res.status(200).json(p))
    .catch(e => res.status(500).json({error:e.message}));
});

//Edit address
router.put('/address/:id', checkIDParam, (req, res) => {
  const {user, street, number, place, zipCode, province, city, country} = req.body;
  const updates = {user, street, number, place, zipCode, province, city, country};

  Address.findByIdAndUpdate(req.params.id, updates, {new:true})
    .then(p => res.status(200).json(p))
    .catch(e => res.status(500).json({error:e.message}));
});

//Delete address
router.delete('/address/:id',checkIDParam, (req, res) => {
  Address.findByIdAndRemove(req.params.id)
      .then(p => res.status(200).json(p))
      .catch(e => res.status(500).json({error:e.message}));
});


module.exports = router;
