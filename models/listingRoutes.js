// routes/listingRoutes.js
const express = require('express');
const router = express.Router();
const {Listing } = require('../models');
// GET route for rendering the listing form view
router.get('/new', (req, res) => {
    res.render('addListing'); // Assuming 'addListing.hbs' is the name of your Handlebars template file
});


// POST route for adding a new rental listing
router.post('/listings', async (req, res) => {
  try {
    const newListing = await RentalListing.create({
      location: req.body.location,
      price: req.body.price,
      images: req.body.images,
      userId: req.body.userId, // Assuming you have a user ID available in the request body
    });
    res.status(201).json(newListing);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
