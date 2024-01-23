const mongoose = require('mongoose');

const pointSchema = new mongoose.Schema({
    timestamp:Number,
    coords:{
        latitude:Number,
        longitude:Number,
        altitude:Number,
        accuracy:Number,
        heading:Number,
        speed:Number
    }
});//this is a subdocument schema for the locations array in the track schema

const trackSchema = new mongoose.Schema({

userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
name: {
    type: String,
    default: ''
  },
  locations:[pointSchema]


});

const Track = mongoose.model('Track', trackSchema);
module.exports = Track;