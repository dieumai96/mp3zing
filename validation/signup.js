const Validator = require('validator');
const isEmpty = require('../utils/isEmpty');


module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.username = !isEmpty(data.username) ? data.username : '';
  data.password = !isEmpty(data.password) ? data.password : '';
  data.password2 = !isEmpty(data.password2) ? data.password2 : '';

  if (!Validator.isLength(data.username, { min: 2, max: 30 })) {
    errors.username = 'Tên đăng nhập phải lớn hơn 2 hoặc nhỏ hơn 30 ký tự';
  }

  if (Validator.isEmpty(data.username)) {
    errors.username = 'Họ không được bỏ trống';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Mật khẩu không được bỏ trống';
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = 'Mật khẩu phải lớn hơn 6 ký tự';
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = 'Xác nhận mật khẩu không được bỏ trống';
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = 'Mật khẩu xác nhận không chính xác';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};


