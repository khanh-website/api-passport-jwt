const express = require('express');
const jwt = require('jsonwebtoken');

const passport = require('../../services/passport');

const router = express.Router();

router.post('/login', passport.authenticate('local', { session: false }), (req, res, next) => {
  // Passport store user info in req.user
  const user = req.user;
  // Generate jwt token for user, you can also add more data to sign, such as: role, birthday...
  const token = jwt.sign(user, process.env.JWT_SECRET);
  res.json({user, token});
});

module.exports = router;
