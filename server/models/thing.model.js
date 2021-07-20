const mongoose = require("mongoose")


const ThingSchema = new mongoose.Schema({
    waitTime:{
        type: Number,
        required:[true, "Please select a response"]
        
    },

    explanation:{
        type: Number,
        required:[true, "Please select a response"]
    },

    workQuality:{
        type: Number,
        required:[true, "Please select a response"]
    }


}, {timestamps:true})


const Thing = mongoose.model("Thing", ThingSchema );

module.exports = Thing;