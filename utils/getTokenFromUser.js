const jwt = require('jsonwebtoken');
const keys = require('./../config/keys');

const getToken =  function (user) {
  const token = jwt.sign(user.toJSON(), keys.SECRET);
  return token;
};
module.exports = getToken;