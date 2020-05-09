const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
  res.render('index', { title: 'Authenticate REST API with passport-jwt', fullUrl });
});

module.exports = router;
