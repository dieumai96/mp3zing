const express = require('express');
const mongoose = require('mongoose');
const app = express();
const keys = require('./config/keys');
const db = keys.MONGO_URI;
const bodyParser = require('body-parser');
const userRoute = require('./routes/api/user/index');
mongoose.connect(db)
  .then(() => console.log('Connected mongodb'))
  .catch(err => console.log(err));

app.use(bodyParser.json())

app.use('/api/user',userRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`App listening on port  ${PORT}`);
})