const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  category: { type: String, enum: ['health', 'sport', 'other'], required: true },
  deadline: { type: String, required: true }, // e.g., "08:00"
  active: { type: Boolean, default: true },
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);
