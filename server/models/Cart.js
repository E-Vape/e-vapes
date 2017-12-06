const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  products: [{
    quantity: Number,
    product: { type: Schema.Types.ObjectId, ref: 'Product'}
  }],
  totalPrice: { type: String },
  status: { type: String }
});

const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;
