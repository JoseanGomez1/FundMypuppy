// const Adoption = require('../models/PetAdoption'); // Import your Mongoose model

// // Create a new adoption
// const createAdoption = async (req, res) => {
//   try {
//     const adoption = new Adoption(req.body); // Create a new adoption instance using request data
//     const savedAdoption = await adoption.save(); // Save the adoption to the database
//     res.status(201).json(savedAdoption); // Return the saved adoption as JSON
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// // Get all adoptions
// // const getAllAdoptions = async (req, res) => {
// //   try {
// //     const adoptions = await Adoption.find(); // Find all adoptions in the database
// //     res.json(adoptions); // Return the list of adoptions as JSON
// //   } catch (error) {
// //     res.status(500).json({ error: error.message });
// //   }
// // };

// // async function index(req,res,next) {
// // 	try {
// //     // get all people
// //     res.json(await Petadoption.find({}));
// //   } catch (error) {
// //     //send error
// //     res.status(400).json(error);
// //   }
// // };

// const getAllAdoptions = async (req, res) => {
//   try {
//     const adoptions = await Adoption.find(); // Find all adoptions in the database
//     res.json(adoptions); // Return the list of adoptions as JSON
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// // Get a specific adoption by ID
// const getAdoptionById = async (req, res) => {
//   try {
//     const adoption = await Adoption.findById(req.params.id); // Find an adoption by its ID
//     if (!adoption) {
//       return res.status(404).json({ error: 'Adoption not found' });
//     }
//     res.json(adoption); // Return the adoption as JSON
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// // Update an adoption by ID
// const updateAdoptionById = async (req, res) => {
//   try {
//     const updatedAdoption = await Adoption.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true }
//     ); // Find and update an adoption by its ID
//     if (!updatedAdoption) {
//       return res.status(404).json({ error: 'Adoption not found' });
//     }
//     res.json(updatedAdoption); // Return the updated adoption as JSON
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// // Delete an adoption by ID
// const deleteAdoptionById = async (req, res) => {
//   try {
//     const deletedAdoption = await Adoption.findByIdAndDelete(req.params.id); // Find and delete an adoption by its ID
//     if (!deletedAdoption) {
//       return res.status(404).json({ error: 'Adoption not found' });
//     }
//     res.json(deletedAdoption); // Return the deleted adoption as JSON
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// module.exports = {
//   createAdoption,
//   getAllAdoptions,
//   getAdoptionById,
//   updateAdoptionById,
//   deleteAdoptionById,
// };


const Adoption = require('../models/PetAdoption'); // Import your Mongoose model

// Create a new adoption
const createAdoption = async (req, res) => {
  try {
    const adoption = new Adoption(req.body); // Create a new adoption instance using request data
    const savedAdoption = await adoption.save(); // Save the adoption to the database
    res.status(201).json(savedAdoption); // Return the saved adoption as JSON
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all adoptions
const getAllAdoptions = async (req, res) => {
  try {
    const adoptions = await Adoption.find(); // Find all adoptions in the database
    res.json(adoptions); // Return the list of adoptions as JSON
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a specific adoption by ID
const getAdoptionById = async (req, res) => {
  try {
    const adoption = await Adoption.findById(req.params.id); // Find an adoption by its ID
    if (!adoption) {
      return res.status(404).json({ error: 'Adoption not found' });
    }
    res.json(adoption); // Return the adoption as JSON
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update an adoption by ID
const updateAdoptionById = async (req, res) => {
  try {
    const updatedAdoption = await Adoption.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    ); // Find and update an adoption by its ID
    if (!updatedAdoption) {
      return res.status(404).json({ error: 'Adoption not found' });
    }
    res.json(updatedAdoption); // Return the updated adoption as JSON
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete an adoption by ID
const deleteAdoptionById = async (req, res) => {
  try {
    const deletedAdoption = await Adoption.findByIdAndDelete(req.params.id); // Find and delete an adoption by its ID
    if (!deletedAdoption) {
      return res.status(404).json({ error: 'Adoption not found' });
    }
    res.json(deletedAdoption); // Return the deleted adoption as JSON
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createAdoption,
  getAllAdoptions,
  getAdoptionById,
  updateAdoptionById,
  deleteAdoptionById,
};
