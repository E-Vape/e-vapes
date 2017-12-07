const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const productSchema = new Schema({
  brand: { type: String },
  model: { type: String, unique: true },
  image: { type: String},
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
