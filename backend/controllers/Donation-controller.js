const Donation = require('./models/donationModel'); // Import your Mongoose model

// Create a new donation
const createDonation = async (req, res) => {
  try {
    const donation = new Donation(req.body); // Create a new donation instance using request data
    const savedDonation = await donation.save(); // Save the donation to the database
    res.status(201).json(savedDonation); // Return the saved donation as JSON
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all donations
const getAllDonations = async (req, res) => {
  try {
    const donations = await Donation.find(); // Find all donations in the database
    res.json(donations); // Return the list of donations as JSON
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a specific donation by ID
const getDonationById = async (req, res) => {
  try {
    const donation = await Donation.findById(req.params.id); // Find a donation by its ID
    if (!donation) {
      return res.status(404).json({ error: 'Donation not found' });
    }
    res.json(donation); // Return the donation as JSON
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a donation by ID
const updateDonationById = async (req, res) => {
  try {
    const updatedDonation = await Donation.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    ); // Find and update a donation by its ID
    if (!updatedDonation) {
      return res.status(404).json({ error: 'Donation not found' });
    }
    res.json(updatedDonation); // Return the updated donation as JSON
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a donation by ID
const deleteDonationById = async (req, res) => {
  try {
    const deletedDonation = await Donation.findByIdAndDelete(req.params.id); // Find and delete a donation by its ID
    if (!deletedDonation) {
      return res.status(404).json({ error: 'Donation not found' });
    }
    res.json(deletedDonation); // Return the deleted donation as JSON
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createDonation,
  getAllDonations,
  getDonationById,
  updateDonationById,
  deleteDonationById,
};
