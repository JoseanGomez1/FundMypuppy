// const express = require('express');
// const router = express.Router();

// const adoptionCtrl = require('../controllers/Adoption-controllers'); // Update the controller import path



// // ADOPTION CREATE ROUTE
// router.post('/', adoptionCtrl.createAdoption);

// // ADOPTION INDEX ROUTE
// // router.get('/', (req, res) => {
// //   res.status(200).json({ message: 'List of all adoptions' }); // Updated message
// // });
// // ADOPTION INDEX ROUTE
// router.get('/', adoptionCtrl.getAllAdoptions);


// // ADOPTION SHOW ROUTE
// router.get('/:id', (req, res) => {
//   res.status(200).json({ message: 'Details of adoption with ID: ' + req.params.id }); // Updated message
// });

// // ADOPTION DELETE ROUTE
// router.delete('/:id', (req, res) => {
//   res.status(200).json({ message: 'Adoption with ID ' + req.params.id + ' has been deleted' }); // Updated message
// });

// // ADOPTION UPDATE ROUTE
// router.put('/:id', (req, res) => {
//   console.log(req.body);
//   res.status(200).json({ message: 'Adoption with ID ' + req.params.id + ' has been updated' }); // Updated message
// });


// module.exports = router;


const express = require('express');
const router = express.Router();

const adoptionCtrl = require('../controllers/Adoption-controllers'); // Update the controller import path


router.post('/', adoptionCtrl.createAdoption);


router.get('/', adoptionCtrl.getAllAdoptions);


router.get('/:id', adoptionCtrl.getAdoptionById);


router.delete('/:id', adoptionCtrl.deleteAdoptionById);


router.put('/:id', adoptionCtrl.updateAdoptionById);

module.exports = router;
