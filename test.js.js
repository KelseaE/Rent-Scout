const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const ZILLOW_API_KEY = process.env.ZILLOW_API_KEY;

app.get('/search', async (req, res) => {
  try {
    const { location, maxPrice, minBedrooms } = req.query;
    
    // Make a request to Zillow API to search for rental properties
    const response = await axios.get('https://api.zillow.com/search/1', {
      params: {
        api_key: ZILLOW_API_KEY,
        location,
        max_price: maxPrice,
        min_bedrooms: minBedrooms
      }
    });

    // Extract relevant data from the response
    const rentalProperties = response.data.results.map(property => ({
      address: property.address,
      price: property.price,
      bedrooms: property.bedrooms,
      bathrooms: property.bathrooms
    }));

    // Send the list of rental properties as a JSON response
    res.json(rentalProperties);
  } catch (error) {
    console.error('Error fetching rental properties:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`RENT-Scout app listening at http://localhost:${PORT}`);
});
