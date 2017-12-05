const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const categories = require('./categories');
const userSchema = new Schema({
  brand: { type: String, required: true },
  model: { type: String, required: true },

  category: { type: String, enum: ['client', 'admin'], default:'client', required: true},
  image: { type: String, default: "https://i.pinimg.com/736x/34/9f/14/349f149c034cc5355ea3c04c3384d3f3--amazing-pictures-hobby.jpg"},
  description: { type: String, required: true },
  price: { type: String, required: true },
  rating: { type: Number }


}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Product = mongoose.model('Product', userSchema);
module.exports = Product;
