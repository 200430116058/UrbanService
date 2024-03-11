const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookinSchema = new Schema({
    service:{
        type:Schema.Types.ObjectId,
        ref:"Service"
    },
    serviceprovider:{
        type:Schema.Types.ObjectId,
        ref:'ServiceProvider'
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    status:{
        type:String,
        default: "pending"
    },
    total:{
        type:Number
    }
})


module.exports = mongoose.model('Booking',bookinSchema); 