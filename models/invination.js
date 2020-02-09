const mongoose = require("mongoose");

const schema = mongoose.Schema({
    recepient:{
        name:{ type:String, required:[true,'recepient name is required']},
        alias:{ type:String }
    },
    sender:{
        name:{ type:String, require:[true,'sender\'s name is required ']}
    },
    status:{
        type:Boolean, default:false
    }
});

const model = mongoose.model('Invitation',schema);

module.exports = model;