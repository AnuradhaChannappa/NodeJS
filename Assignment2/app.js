const express = require('express');

const app = express();

app.use('/users', (req, res, next) => {

  res.send('<h1>List of Users <li>Anu</li><li>Ani</li><li>bani</li></h1>');

})

app.use('/', (req, res, next) => {
  console.log("In middle middle ware!!");
  next();
})

app.use('/', (req, res, next) => {
  console.log("In last middle ware!!");
  res.send('<h1>Users home page<h1>');
});

app.listen(5000);