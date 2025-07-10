const mongoose = require('mongoose');

const statsSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, default: Date.now }, // when the stats were recorded
  completed: { type: Number, default: 0 },
  pending: { type: Number, default: 0 },
  overdue: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Stats', statsSchema);
