const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  products: [{
    quantity: Number,
    product: { type: Schema.Types.ObjectId, ref: 'Product'}
  }],
  totalPrice: { type: Number },
  status: { type: String }
});

const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;
