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
  // Demo get the user
  client.query('SELECT * FROM user', (er, re)=>{
    console.log('result: '+re);
    res.send('ok');
    res.end();
    client.end();
  })
});

module.exports = router;
