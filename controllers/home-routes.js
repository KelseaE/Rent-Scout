const router = require('express').Router();
const { Listing, House } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

// GET all listings for homepage
router.get('/', async (req, res) => {
  try {
    const dbListingData = await Listing.findAll({
      include: [
        {
          model: House,
          attributes: ['description'],
        },
      ],
    });

    const listings = dbListingData.map((listing) =>
      listing.get({ plain: true })
    );

    res.render('index', {
      listings,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one listing
// Use the custom middleware before allowing the user to access the listings
router.get('/listing/:id', withAuth, async (req, res) => {
  try {
    const dbListingData = await Listing.findByPk(req.params.id, {
      include: [
        {
          model: House,
          attributes: [
            'id',
            'address',
            'move_in_date',
            'listing_date',
            'rent',
            'description',
          ],
        },
      ],
    });

    const listing = dbListingData.get({ plain: true });
    res.render('listing', { listing, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one house
// Use the custom middleware before allowing the user to access the house
router.get('/house/:id', withAuth, async (req, res) => {
  try {
    const dbHouseData = await House.findByPk(req.params.id);

    const house = dbHouseData.get({ plain: true });

    res.render('house', { house, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
