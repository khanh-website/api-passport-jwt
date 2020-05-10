const JwtStrategy = require('passport-jwt').Strategy,
ExtractJwt = require('passport-jwt').ExtractJwt;
const opts = {}
// passport-jwt will look for Authorization header with bearer scheme.
// Client must use request header as below to send JWT token for backend to verify:
// Authorization: bearer <jwt-token-here>
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
// Use the same secret used to sign the jwt token in login api
opts.secretOrKey = process.env.JWT_SECRET;
module.exports = new JwtStrategy(opts, function (jwt_payload, done) {
  // passport-jwt already verified the signature. We can now use the jwt_payload.
  // We can do database request to get more information. But this may slow down our overall system.
  // Because jwt token check is perform on every secured api.
  done(null, jwt_payload);
});
