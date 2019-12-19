'use strict'
const InfluencerM =  require("../../models/influencer")

module.exports.createInfluencer = async (contextObject) =>{

    try{
        const influencer = await InfluencerM.create(contextObject);
        if(!influencer){
            throw "error while creating influencer"
        }
        else{
            return influencer ;
        }
    }
    catch(e){

    }
}
