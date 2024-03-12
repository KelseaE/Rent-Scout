const { Listings } = require('../models');

const listingdata = [

];

const seedListings = () => Listings.bulkCreate(listingdata);

module.exports = seedListings;
