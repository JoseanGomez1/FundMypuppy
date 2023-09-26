///////////////////////////////
// DEPENDENCIES
////////////////////////////////
const mongoose = require("mongoose");
const Schema = mongoose.Schema
///////////////////////////////
// MODELS
////////////////////////////////
const PupsSchema = new Schema({
  name: String,
  image: String,
  title: String,
},{timestamps: true});

module.exports = mongoose.model("Pups", PupsSchema);

