const express = require('express');
const mongoose = require('mongoose');
const app = express();
const keys = require('./config/keys');
const db = require('./lib/Database');
const bodyParser = require('body-parser');
const userRoute = require('./routes/api/user/index');
const weatherRoute = require('./routes/api/weather/index');
db.init()
  .then(() => console.log('connected mongodb'))
  .catch(err => console.log(err));
app.use(bodyParser.json())

app.use('/api/user', userRoute);
app.use('/api/weather',weatherRoute);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`App listening on port  ${PORT}`);
})