var express = require('express');
var router = express.Router();

var siteData = {
  title: 'Task Survey',
  version: '1.0.0',
  authors: 'Jennifer Kahn'
};
/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index');
});

router.get('/thanks', function(req, res, next) {
  res.render('thanks');
});

module.exports = router;
