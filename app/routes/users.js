var express = require('express');
const { Client } = require('pg')
const client = new Client({
  user:'postgres',
  host:'192.168.1.200',
  database:'postgres',
  port:'5435',
  password:'postgres'
});

client.connect()

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // Demo get the user
  client.query('SELECT * FROM public.user', (er, re)=>{
    if(er!=null) {
      console.log('error: ',er);
      res.send('error when query users');
    }
    else {
      var result = '';
      console.log('result: ', re);
      for(let row of re.rows){
        result+=JSON.stringify(row)+'\n';
      }
      res.send(result);
    }
    res.end();
  })
 
});

module.exports = router;
