const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    name:{
        type:String
    },
    
    password:{
        type:String
    },

    email:{
        type:String,
        unique:true
    },

    contact:{
        type:Number,
        unique:true
    },

    role:{
        type:Schema.Types.ObjectId,
        ref:'Role'
    }

})

module.exports = mongoose.model('User',userSchema); 