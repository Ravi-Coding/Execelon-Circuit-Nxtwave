const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
        unique:true,
    },
    population:{
        type:Number,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    latitude:{
        type:Number,
        required:true
    },
    longitude:{
        type:Number,
        required:true
    }
});

const cityData = mongoose.model('cityData',citySchema);
module.exports = cityData;

