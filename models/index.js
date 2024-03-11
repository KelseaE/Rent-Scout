const User = require('./User');
const Listings = require('./Listings');
const House = require('./House');

Listings.hasMany(House, {
  foreignKey: 'listing_id',
});

House.belongsTo(Listings, {
  foreignKey: 'listing_id',
});

module.exports = { User, Listings, House };
