const express = require('express');
const router = express.Router();

router.get('/logged', (req, res) => {
  const { _json } = req.user;
  res.render('logged', {
    ..._json,
  });
});

router.get('/no-permission', (req, res) => {
  res.render('noPermission');
});

module.exports = router;
