const sequelize = require('../config/connection');
const seedListings = require('./listingsData');
const seedHouses = require('./houseData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedListings();

  await seedHouses();

  process.exit(0);
};

seedAll();
