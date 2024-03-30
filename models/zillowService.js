// zillowService.js

const fetch = require('node-fetch'); // Assuming you're using Node.js

const ZILLOW_API_URL = 'https://api.zillow.com/research/data';

// Function to fetch property details from Zillow API
const getPropertyDetails = async (propertyId) => {
  try {
    const response = await fetch(`${ZILLOW_API_URL}/properties/${propertyId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch property details from Zillow API');
    }
    const propertyData = await response.json();
    return propertyData;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch property details');
  }
};

// Export the functions
module.exports = { getPropertyDetails };
