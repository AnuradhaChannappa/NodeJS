const express = require('express');
const path = require('path');

const app = express();

const adminRoutes = require('./routes/adminRoutes');

app.use(express.static(path.join(__dirname,'/public')));

app.use('/', adminRoutes);
app.use('/', (req,res,next) => {
  res.send('<h1>Default page</h1>');
});

app.listen(7000);