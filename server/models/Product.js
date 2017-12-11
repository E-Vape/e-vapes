const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const productSchema = new Schema({
  brand: { type: String },
  model: { type: String, unique: true },
  image: { type: String, default: "https://cdn.xl.thumbs.canstockphoto.es/dispositivo-icono-estilo-caricatura-eps-vectorial_csp38221646.jpg"},
  description: { type: String },
  price: { type: Number },
  rating: { type: Number },
  type:{
    category:{ type: String, enum:['Mod','Ato','E-liquid'] },
    subcategory:{ type: String, enum:['Mechanic','Electronic','Atomizer','Claromizer','3mg','0mg'] }
  },
},{
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
  }
  });

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
