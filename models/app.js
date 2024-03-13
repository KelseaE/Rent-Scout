const express = require('express');
const exphbs  = require('express-handlebars');
const userRoutes = require('./routes/userRoutes');
const listingRoutes = rrequire('./routes/listingRoutes');

const app = express();

// Configure Handlebars
app.engine('.hbs', exphbs({ extname: '.hbs' }));
app.set('view engine', '.hbs');

// Other middleware and setup

app.use(express.json());
app.use('/api', userRoutes);
app.use('/api/listings', listingRoutes);
// Start the server

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
