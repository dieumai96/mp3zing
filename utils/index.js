const request = require('request-promise');
exports.request = function(uri){
  return rp({
    method : 'GET',
    uri
  })
}