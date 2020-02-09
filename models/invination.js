const mongoose = require("mongoose");

const schema = mongoose.Schema({
    recepient:{
        name:{ type:String, required:[true,'recepient name is required']},
        alias:{ type:String }
    },
    sender:{ type:String, require:[true,'sender\'s name is required ']},
    comment:{ type:String, default:"" },
    status:{
        type:Boolean, default:false
    },
    date: {type:Date, default: Date.now}
});

const model = mongoose.model('Invitation',schema);

module.exports = model;