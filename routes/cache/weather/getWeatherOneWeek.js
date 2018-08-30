const express = require('express');
const Weather = require('../../../models/weather');
const keys = require('./../../../config/keys');
const request = require('request');
// const redis = require('./../../../lib/Redis');
module.exports = function getWeatherOneWeek(req, res, next) {
  const param = req.params.week;
  const url = `http://api.openweathermap.org/data/2.5/forecast/daily?q=${param}&units=metric&cnt=7&appid=${keys.KEY_API}`;
  request(url, function (err, response, body) {
    if (err) {
      console.log('error:', error);
    } else {
      let weather = JSON.parse(body)
      return res.send(weather);
    }
  })
}