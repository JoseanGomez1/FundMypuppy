///////////////////////////////
// DEPENDENCIES
////////////////////////////////
const mongoose = require("mongoose");
const Schema = mongoose.Schema
///////////////////////////////
// MODELS
////////////////////////////////
const donationSchema = new Schema({
  name: String,
  donationAmount: mongoose.Decimal128,
  description: { type: String, required: true },
})

module.exports = mongoose.model("donation", donationSchema);

