var express = require('express');
var router = express.Router();
var { searchItems, getItem } = require('../services/items');

router.get('/', function(req, res, next) {
  const { params, query, headers: { author } } = req;
  // const parsedAuthor = JSON.parse(author);
  const parsedAuthor = '';
  searchItems(query)
    .then((response) => res.json({ ...response, author: parsedAuthor}));
});

router.get('/:id', function(req, res, next) {
  const { params: { id }, query, headers: { author } } = req;
  // const parsedAuthor = JSON.parse(author);
  const parsedAuthor = '';
  getItem(id)
    .then((response) => res.json({ ...response, author: parsedAuthor }))
});

module.exports = router;
