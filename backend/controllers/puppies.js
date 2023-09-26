///////////////////////////////
// DEPENDENCIES
////////////////////////////////

const express = require('express');
const { Pups } = require('../models');
// We can use 'object destructuring' to access just the model we need for this controller

///////////////////////////////
// CONTROLLERS
////////////////////////////////

// PEOPLE INDEX ACTION
async function index(req, res, next) {
  try {
    // Get all people
    res.json(await People.find({}));
  } catch (error) {
    // Send error
    res.status(400).json(error);
  }
}

// PEOPLE CREATE ACTION
async function create(req, res, next) {
  try {
    // Create a new person
    res.json(await People.create(req.body));
  } catch (error) {
    // Send error
    res.status(400).json(error);
  }
}

// PEOPLE SHOW ACTION
async function show(req, res, next) {
  try {
    // Send one person
    res.json(await People.findById(req.params.id));
  } catch (error) {
    // Send error
    res.status(400).json(error);
  }
}

// PEOPLE DESTROY ACTION
async function destroy(req, res, next) {
  try {
    // Delete people by ID
    res.json(await People.findByIdAndRemove(req.params.id));
  } catch (error) {
    // Send error
    res.status(400).json(error);
  }
}

// PEOPLE UPDATE ACTION
async function update(req, res, next) {
  try {
    // Update people by ID, provide the form data, and return the updated document.
    res.json(
      await People.findByIdAndUpdate(req.params.id, req.body, { new: true })
    );
  } catch (error) {
    // Send error
    res.status(400).json(error);
  }
}

// EXPORT controller actions
module.exports = {
  index,
  create,
  show,
  delete: destroy,
  update,
};
