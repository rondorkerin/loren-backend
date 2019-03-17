var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const routes = [
  'contacts',
  'users',
]

module.exports = (app) => {
  app.use('/', router);
  for (let routeName of routes) {
    const route = require(`./${routeName}`)
    app.use(`/${routeName}`, route)
  }
}
