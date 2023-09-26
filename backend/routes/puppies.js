const express = require('express')
const router = express.Router()
const puppiesCtrl = require('../controllers/puppies')
///////////////////////////////
// ROUTES
////////////////////////////////

// PEOPLE INDEX ROUTE
router.get("/", puppiesCtrl.index);

// PEOPLE CREATE ROUTE
router.post("/", puppiesCtrl.create);

// PEOPLE SHOW ROUTE
router.get("/:id", puppiesCtrl.show);

// PEOPLE DELETE ROUTE
router.delete("/:id", (req, res) => {
	res.status(200).json({message: "people delete route: " + req.params.id })
});

// PEOPLE UPDATE ROUTE
router.put("/:id", (req, res) => {
	console.log(req.body)
	res.status(200).json({message: "people update route: " + req.params.id })
});


module.exports = router