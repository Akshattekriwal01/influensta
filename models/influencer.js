const mongoose = require("mongoose");

influencerSchema = new mongoose.Schema({
  name : String,
  socialMedia: {instagram : {followers: Number},
                twitter : {followers: Number}, }  
});

module.exports = mongoose.model("Influencers", influencerSchema);