var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index', { title: 'Home | Alluring Advertising'});
});

router.get('/about', function(req, res) {
  res.render('about', { title: 'About Us | Alluring Advertising' });
});

router.get('/services', function(req, res) {
  res.render('services', { title: 'Services | Alluring Advertising' });
});

router.get('/portfolio', function(req, res) {
  res.render('portfolio', { title: 'Portfolio | Alluring Advertising' });
});

router.get('/webdesign', function(req, res) {
  res.render('webdesign', { title: 'Portfolio | Alluring Advertising' });
});

router.get('/branding', function(req, res) {
  res.render('branding', { title: 'Portfolio | Alluring Advertising' });
});

router.get('/print', function(req, res) {
  res.render('print', { title: 'Portfolio | Alluring Advertising' });
});

router.get('/clients', function(req, res) {
  res.render('message', { title: 'Portfolio | Alluring Advertising' });
});

module.exports = router;
