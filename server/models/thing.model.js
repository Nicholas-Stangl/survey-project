const mongoose = require("mongoose")


const ThingSchema = new mongoose.Schema({
    howLong:{
        type: String,
        required:[true, "Please select a response"]
        
    },

    whereHear:{
        type: String,
        required:[true, "Please select a response"]
    },

    whatBrought:{
        type: String,
        required:[true, "Please select a response"]
    }


}, {timestamps:true})


const Thing = mongoose.model("Thing", ThingSchema );

module.exports = Thing;