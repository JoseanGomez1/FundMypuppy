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
router.delete("/:id", puppiesCtrl.delete);

// PEOPLE UPDATE ROUTE
router.put("/:id", puppiesCtrl.update);


module.exports = router