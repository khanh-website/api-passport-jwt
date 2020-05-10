const express = require('express');
const router = express.Router();
const passport = require('../../services/passport');

/* GET home page. */
router.get('/public', (req, res, next) => {
  res.json('Public cat for everyone!');
});

router.get('/private',
passport.authenticate('jwt', { session: false }),
(req, res, next) => {res.json('Premium cat only for cat lovers.')})

module.exports = router;
