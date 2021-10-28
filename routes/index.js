exports.helloWorld = (req, res) => {
  let message = req.query.message || req.body.message || 'ありがとうございました';
  res.status(200).send(message);
};

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '画像認証システム' });
});

module.exports = router;
