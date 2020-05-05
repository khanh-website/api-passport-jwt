const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/public', function(req, res, next) {
  res.json('Public cat for everyone!');
});

module.exports = router;
