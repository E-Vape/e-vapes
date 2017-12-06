const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const productSchema = new Schema({
  brand: { type: String },
  model: { type: String, unique: true },
  image: { type: String, default: "https://i.pinimg.com/736x/34/9f/14/349f149c034cc5355ea3c04c3384d3f3--amazing-pictures-hobby.jpg"},
  description: { type: String },
  price: { type: String },
  rating: { type: Number },
  category: { type:{
    Mod: { type: String, enum:['Mechanic','Electronic'] },
    Ato : { type: String, enum:['Atomizer','Claromizer'] },
    Eliquid : { type: String, enum:['Nicotine','noNicotine'] }
 }
}
},{
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
  }
  });

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
