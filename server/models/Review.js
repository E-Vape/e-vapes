const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const commentSchema = new Schema({
  text: { type: String, required: true },
  author : { type: Schema.Types.ObjectId, ref: 'User'}, //???,
  product : { type: Schema.Types.ObjectId, ref: 'Product'}, //???,

  }, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Review = mongoose.model('Review', commentSchema);
module.exports = Review;
