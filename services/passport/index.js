const passport = require('passport');
const LocalStrategy = require('./local');

passport.use(LocalStrategy);

module.exports = passport;
