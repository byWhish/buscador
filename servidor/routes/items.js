var express = require('express');
var router = express.Router();
var { searchItems, getItem } = require('../services/items');

router.get('/', function(req, res, next) {
  const { params, query, headers: { author } } = req;
  searchItems(query)
    .then((response) => res.json(response));
});

router.get('/:id', function(req, res, next) {
  const { params: { id }, query, headers: { author } } = req;
  getItem(id)
    .then((response) => res.json(response))
});

module.exports = router;
