const mongoose = require('mongoose')
const monthlySchema = new mongoose.Schema({
    package_name: {
        type: String
    },
    category: {
        type: String
    },
    interior: {
        type: String
    },
    exterior: {
        type: String
    },
    service1:{
        type: String
    },
    service2:{
        type: String
    },
    service3:{
        type: String
    },
    service4:{
        type: String
    },
    service5:{
        type: String
    },
    service6:{
        type: String
    },
    package_time_limit: {
        type: Number
    },
    price: {
    type: Number
    },
    after_discount: {
        type: Number
    }
});
module.exports = mongoose.model("monthly",monthlySchema)
