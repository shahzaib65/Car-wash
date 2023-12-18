const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
    booking_service_name: {
        type: String
    },
    booking_status: {
        type: String
    },
    booking_schedule:{
        type: String
    },
    service_time: {
        type: String
    },
    charges: {
        type: Number,
        default: false
    },
    payment_status: {
        type: String
    },
    userId: {
      type: String
    }
},{
    timestamps: true
})
module.exports = mongoose.model('Booking',bookingSchema);