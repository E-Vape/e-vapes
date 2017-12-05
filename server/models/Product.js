const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
// const categories = require('./categories');


const productSchema = new Schema({
  brand: { type: String },
  model: { type: String },
  category: { type: String, enum: ["Mod", "Ato", "E-liquid"], default:"Mod"},
  subcategory: { type: String, enum: ["Mechanic", "Elecronic", "Atomizer", "Claromizer", "0gr", "3gr",] },
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

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
