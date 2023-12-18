const mongoose = require('mongoose')
const carSchema = new mongoose.Schema({
  "service1": {
    type: String
  },
  "service2": {
    type: String
  },
  "service3": {
    type: String
  },
  "service4": {
    type: String
  },
  "service5": {
    type: String
  },
  "service6": {
    type: String
  },
  "service7": {
    type: String
  },
  "service8": {
    type: String
  },
  "service9": {
    type: String
  },
  "price": {
    type: Number
  },
  service_url: {
    type: String
  },
  service_image_id: {
    type: String
  },
  quantity: {
    type: Number
  },
  after_discount: {
    type: Number
  },
  discount_percentage: {
    type: Number
  },
  wash_type: {
    type: String
  },
  car_type: {
    type: String
  }

},{
    timestamps: true
})
module.exports = mongoose.model('Car',carSchema);