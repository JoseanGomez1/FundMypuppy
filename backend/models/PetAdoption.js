const mongoose = require('mongoose');

const adoptionsSchema = new mongoose.Schema({
  dogtype: { type: String, required: true },
  description: { type: String, required: true },
  fundinggoal: {type: Number, required: true},
  currentFunding: {type: Number, default: 0.0},
  imageURL: { type: String, required: true },
  deadlineDate: { type: Date, default: Date.now },
});

const Adoption = mongoose.model('Adoption', adoptionsSchema);

module.exports = Adoption;
