const { Houses } = require('../models');

const housedata = [

];

const seedHouses = () => Houses.bulkCreate(paintingdata);

module.exports = seedHouses;
