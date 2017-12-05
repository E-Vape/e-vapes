const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const categories = require('./categories');


const userSchema = new Schema({
  brand: { type: String },
  model: { type: String },
  categories: ["Mod", "Ato", "E-liquid"],
  // category: { type: String, enum: [categories], default:categories[0]},
  image: { type: String, default: "https://i.pinimg.com/736x/34/9f/14/349f149c034cc5355ea3c04c3384d3f3--amazing-pictures-hobby.jpg"},
  description: { type: String },
  price: { type: String },
  rating: { type: Number },

}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Product = mongoose.model('Product', userSchema);
module.exports = Product;
