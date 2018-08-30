const express = require('express');
const getWeatherOneWeek = require('./../../cache/weather/getWeatherOneWeek');
const getWeatherOneDay = require('./../../cache/weather/getWeatherOneDay');
const router = express.Router();
  router.get('/getoneweek/:week',getWeatherOneWeek);
  router.get('/getoneday/:day',getWeatherOneDay);

module.exports =  router;