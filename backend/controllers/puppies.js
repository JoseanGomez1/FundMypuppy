// /controllers/people.js

///////////////////////////////
// DEPENDENCIES
////////////////////////////////

const express = require('express')
const {Pups} = require('../models')
// we can use 'object de-structuring' to access just the model we need for this controller


///////////////////////////////
// CONTROLLERS
////////////////////////////////

// PEOPLE INDEX ACTION
async function index(req,res,next) {
	try {
    // get all people
    res.json(await People.find({}));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
};

// PEOPLE CREATE ACTION
async function create(req,res,next) {
  try {
    // create new person
    res.json(await People.create(req.body));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
};

// PEOPLE SHOW ACTION
async function show(req,res,next) {
    try {
        // send one person
        res.json(await People.findById(req.params.id));
      } catch (error) {
        //send error
        res.status(400).json(error);
      }
};

// ... the remaining people controller actions will go below 

// PEOPLE DESTROY ACTION 

// PEOPLE UPDATE ACTION

// EXPORT Controller Action
module.exports = {
	index,
	create,
	show 
}


