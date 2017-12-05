const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  user : { type: Schema.Types.ObjectId, ref: 'User'}, //???,
  street : { type: String},
  number: { type: String },
  place: { type: String },
  zipCode: { type: Array },
  province: { type: Number },
  city: { type: String },
  country: { type: String }

});

const Address = mongoose.model('Address', userSchema);
module.exports = Address;
