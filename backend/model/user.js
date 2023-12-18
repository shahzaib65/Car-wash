const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String
    },
    email: {
        type: String
    },
    password:{
        type: String
    },
    avatar: {
        profile_id: String,
        url: String
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    phoneNo: {
        type: Number
    }
})
module.exports = mongoose.model('User',userSchema);