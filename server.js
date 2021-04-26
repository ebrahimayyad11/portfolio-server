'use strict';

const express = require('express');
const server = express();
const PORT = process.env.PORT || 1111;
server.listen(PORT, () => {
  console.log('the port number is : ' + PORT);
});
server.get('/', (req, res) => {
  res.send('hello')
})
server.get('/test', (req, res) => {
  res.send('every thing is good')
})
server.get('/data', (req, res) => {
  res.send('here is the data !')
})




