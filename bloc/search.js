'use strict'
const InfluencerM =  require("../models/influencer")

module.exports.search =async (contextObj) =>{   
   const {query,limit,skip} = contextObj ;

    const reg = new RegExp("^" + query + ".*");
    try{
        const result = await InfluencerM.find({name : reg}).skip(skip).limit(limit);
        
        return result ;
    }
    catch(e){
        console.log("inside bloc")
    }
} 