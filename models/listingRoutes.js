// routes/listingRoutes.js
const express = require('express');
const router = express.Router();
const {Listing } = require('../models');

// Middleware to check if the user is logged in
const isAuthenticated = (req, res, next) => {
    if (req.user) {
        next(); // User is logged in, proceed to the next middleware/route handler
    } else {
        res.status(401).json({ message: 'Unauthorized' });
    }
};

// GET route for rendering the listing form view
router.get('/new', isAuthenticated, (req, res) => {
    res.render('addListing'); 
});


// POST route for adding a new rental listing
router.post('/listings',isAuthenticated, async (req, res) => {
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
