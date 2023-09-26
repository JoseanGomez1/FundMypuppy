// ./routes/people.js

///////////////////////////////
// DEPENDENCIES
////////////////////////////////

const express = require('express')
const router = express.Router()

///////////////////////////////
// ROUTES
////////////////////////////////

// PEOPLE INDEX ROUTE
router.get("/", async (req, res) => {
	res.status(200).send('puppies')
});

// PEOPLE CREATE ROUTE
router.post("/", async (req, res) =>  {
	res.status(201).json({message: "puppies create route"})
});

module.exports = router