const passport = require('passport');
const LocalStrategy = require('./local');
const JwtStrategy = require('./jwt');

passport.use(LocalStrategy);
passport.use(JwtStrategy);

module.exports = passport;
