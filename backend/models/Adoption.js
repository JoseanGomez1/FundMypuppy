const mongoose = require('mongoose');

const adoptionsSchema = new mongoose.Schema({
  dogtype: { type: String, required: true },
  description: { type: String, required: true },
  fundinggoal: { type: Number, required: true },
  imageURL: { type: String, required: true },
  deadlineDate: { type: Date, default: Date.now },

  
});

const adoption = mongoose.model('adoption', adoptionsSchema);