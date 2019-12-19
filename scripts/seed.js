'use strict'
const Influencer = require("../models/influencer.js");
var faker = require('faker');

class influencerObj {

constructor()
{
   this.name = faker.name.firstName(),
  this.socialMedia= {instagram : {followers:Math.ceil(Math.random() * 100000)},
                            twitter:{followers:Math.ceil(Math.random() * 100000)}}  
                                                        
}



}


module.exports.influencer = async (count) =>{
    for(let i = 0 ; i <  count ; i ++){
    const influencer = await Influencer.create(new influencerObj())
    }
}

