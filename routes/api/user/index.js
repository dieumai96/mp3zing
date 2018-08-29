const express = require('express');
const User = require('../../../models/user');
const co = require('co');

const validateRegisterInput = require('../../../validation/signup');
const validateLoginInput = require('../../../validation/login');
const router = express.Router();

router.post('/register', (req, res, next) => {
  const { username, password } = req.body;
  const { isValid, errors } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json({ error: true, errors });
  }
  co(function* () {
    const existingUser = yield User.findOne({ username });

    if (existingUser) {
      errors.username = 'Tên đăng nhập đã tồn tại',
        res.status(400).json(errors);
    }

    const user = new User({ username, password });
    return user.save();
  })
    .then(user => res.json({ username: user.username, access_token: user.access_token }))
    .catch(err => next(err));
});

router.post('/login', (req, res, next) => {
  const { username, password } = req.body;
  const { isValid, errors } = validateLoginInput(req.body);
  if (!isValid) {
    return res.status(400).json({ error: true, errors });
  }
  User.findOne({ username: username })
    .then(user => {
      if (!user) {
        errors.username = 'Người dùng không tồn tại';
        res.status(400).json(errors);
      }
      user.comparePassword(password).then(isMatch => {
        if (isMatch) {
          res.status(200).json({
            username: user.username,
            password: user.password,
            access_token: user.access_token,
          })
        } else {
          errors.password = 'Mật khẩu không đúng';
          res.status(400).json(errors);
        }
      })
    })
})

module.exports = router;

