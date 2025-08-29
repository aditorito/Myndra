const mongoose  = require("mongoose");

const waitingListSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    phoneNo:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }

});

const WaitingList = mongoose.model("WaitingList",waitingListSchema);

module.exports = WaitingList;
