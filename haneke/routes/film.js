var express = require('express');
var router = express.Router();

const { Pool, Client } = require('pg')

const client = new Client({
  user: 'aidan',
  host: 'localhost',
  database: 'hanekedb',
  password: 'node',
  port: 5432,
})
client.connect()

client.query('SELECT * FROM film', (err, res) => {
  console.log(err, res)
  client.end()
})

/* GET film listing. */
router.get('/', function(req, res, next) {
    res.render('film', { title: 'Michael Haneke' });
});

module.exports = router;