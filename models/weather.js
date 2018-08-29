const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const itemSchema = new Schema({
  temp: [
    {
      min: { type: Number },
      max: { type: Number },
    }
  ],
  weather: [
    {
      id: { type: Number },
      main: { type: String },
      discription: { type: String },
      icon: { type: String }
    }
  ],
  wind: [
    {
      speed: { type: Number },
      deg: { type: Number },
    }
  ],
  cloud: {
    type: Number,
  },

  snow: {
    type: Number
  }
})
const weatherSchema = new Schema({
  city: [
    {
      name: { type: String },
      lon: { type: Number },
      lat: { type: Number },
    }
  ],
  list: [itemSchema]
}, { _id: false })
module.exports = Weather = mongoose.model('weather', weatherSchema);