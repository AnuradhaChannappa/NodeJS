const express = require('express');
const path = require('path');

const routes = express.Router();



routes.get('/users', (req, res, next) => {
  res.sendFile(path.join(path.dirname(process.mainModule.filename),'views','admin.html'));
  console.log('inside routtes middleware !!');
  //res.send('<h1>Node users !!</h1>');
});

module.exports = routes;