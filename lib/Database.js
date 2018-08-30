const mongoose = require('mongoose');
const keys = require('./../config/keys');
exports.init = function () {
  return new Promise((resolve, reject) => {
    mongoose.Promise = global.Promise;
    const conn = mongoose.connection;
    mongoose.connect(keys.MONGO_URI);
    conn.on('error', (err) => reject(err));
    conn.once('open', () => resolve());
  });
}