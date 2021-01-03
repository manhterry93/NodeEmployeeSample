var express = require('express');
const { Client } = require('pg')
const client = new Client({
  user:'postgres',
  host:'localhost',
  database:'employee',
  port:'5432'
});

await client.connect()

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
