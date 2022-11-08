const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    email : {
        type : String,
        require : true
    },
    password : {
        type : String,
        require : true
    },
    phone : {
        type : String,
        require : true,
        default : false
    },
    city : {
        type : String,
        require : true,
        default : false
    },
    state : {
        type : String,
        require : true,
        default : false
    },
    isActive : {
        type : Boolean,
        require : true,
    },
    role : {
        type : String,
        default: "User"
    }
})
userSchema.set('timestamps',true)
module.exports = mongoose.model('user',userSchema)