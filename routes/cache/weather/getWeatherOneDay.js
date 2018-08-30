const express = require('express');
const Weather = require('../../../models/weather');
const keys = require('./../../../config/keys');
const request = require('request');
module.exports = function getWeatherOneDay(req, res, next) {
  const param = req.params.day;
  const url = `
  http://api.openweathermap.org/data/2.5/weather?q=${param}&units=imperial&appid=${keys.KEY_API}
  `;
  request(url, function (err, response, body) {
    if (err) {
      console.log('error:', error);
    } else {
      let weather = JSON.parse(body)
      return res.send(weather);
    }
  })
}