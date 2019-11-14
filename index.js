const express = require('express');
const app = express();

const { config } = require('./config/index');

app.get('/', function(req,res){
  res.send("hello world");
});

app.get('/json', function(req,res){
  res.json({hello:"world"});
});

app.listen(config.port,function(){
  console.log(`listen http://localhost:${config.port}`)
})