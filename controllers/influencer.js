const createInfluencerBloc = require("../bloc/influencers.js/create_influencer");

exports.createInfluencer = async (req,res,next)=>{
    const limit = req.query.limit || 10
    const contextObj = {
        name : req.body.name
    }
    let r = await createInfluencerBloc.createInfluencer(contextObj)
    
    //res.render("influencer/index",{influencers:r});
        res.send({success: "success"})

};