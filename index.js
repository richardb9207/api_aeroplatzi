const express = require('express');
const app = express();

const { config } = require('./config/index');
const ticketsApi = require('./routes/tickets.js');

app.use(express.json());

ticketsApi(app);

app.listen(config.port,function(){
  console.log(`listen http://localhost:${config.port}`)
})