const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const mailSchema = new Schema({
    userId: { type:Schema.Types.ObjectId, ref:'User' },
    from: String,
    to: String,
    text: String,
    subject: String,
    html: String,
  });

  const Mail = mongoose.model('Mail', mailSchema);
  module.exports = Mail;
