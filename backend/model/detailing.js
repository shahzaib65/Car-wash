const mongoose = require("mongoose");
const detailingSchema = new mongoose.Schema({
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
      car_type: {
        type: String
      },
      service_time: {
        type: Number
      }
},
{timestamps: true})
module.exports = mongoose.model("Detailing",detailingSchema);
