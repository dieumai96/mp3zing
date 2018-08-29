const Validator = require('validator');
const isEmpty = require('../utils/isEmpty');


module.exports = function validateLoginInput(data) {
  let errors = {};

  data.username = !isEmpty(data.username) ? data.username : '';
  data.password = !isEmpty(data.password) ? data.password : '';

 

  if (Validator.isEmpty(data.username)) {
    errors.username = 'Tên đăng nhập không được bỏ trống';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Mật khẩu không được bỏ trống';
  }
 


  return {
    errors,
    isValid: isEmpty(errors)
  };
};


