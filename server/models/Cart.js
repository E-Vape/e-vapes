const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  user : { type: Schema.Types.ObjectId, ref: 'User'}, //???,
  product: { type: Array },// product ref model y price   { type: Schema.Types.ObjectId, ref: 'Product'},
  quantity: { type: Number },
  totalPrice: { type: String }, //multiplicacion
  status: { type: String }

});

const Cart = mongoose.model('Cart', userSchema);
module.exports = Cart;
