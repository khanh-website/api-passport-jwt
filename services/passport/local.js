const LocalStrategy = require('passport-local').Strategy;

module.exports = new LocalStrategy({ session: false }, (username, password, callback) => {
  // We use default {username: "catlover", password: "cat", id: 1} to authenticate.
  // You should use database to check for user credentials.
  if (username === 'catlover' && password === 'cat') {
    callback(null, { id: 1, username })
  } else
    callback(null, false);
});
