///////////////////////////////
// DEPENDENCIES
////////////////////////////////

// initialize .env variables
require("dotenv").config();

// start the mongoose db connection
require('./config/database')


// pull PORT from .env, give default value of 4000 and establish DB Connection
const { PORT } = process.env;

// import express
const express = require("express");
// import puppies router
const puppiesRouter = require('./routes/puppies')

// create application object
const app = express();

///////////////////////////////
// ROUTES

// all requests for endpoints that begin with '/people'
app.use('/puppies', puppiesRouter)


////////////////////////////////
// create a test route
app.get("/", (req, res) => {
    res.send("hello world");
});

///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));

