const User = require('./User');
const Listing = require('./Listings');
const House = require('./House');

Listing.hasMany(House, {
  foreignKey: 'listing_id',
});

House.belongsTo(Listing, {
  foreignKey: 'listing_id',
});

module.exports = { User, Listing, House };
