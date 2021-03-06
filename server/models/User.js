const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true},
  role: { type: String, enum: ['client', 'admin'], default:'client', required: true},
  // creatorCart: { type: Schema.Types.ObjectId, ref: 'Cart' },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
