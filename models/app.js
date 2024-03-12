const express = require('express');
const userRoutes = require('./routes/userRoutes');
const listingRoutes = rrequire('./routes/listingRoutes');

const app = express();

// Other middleware and setup

app.use(express.json());
app.use('/api', userRoutes);
app.use('/api/listings', listingRoutes);
// Start the server

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
