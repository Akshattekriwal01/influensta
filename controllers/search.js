const searchBloc = require("../bloc/search");

exports.getSearchResult = async (req,res,next)=>{
    const limit = req.query.limit || 10
    const contextObj = {
         query : req.query.query,
         limit : limit,
         skip : (req.query.page - 1 || 0) * limit
    }
    let r = await searchBloc.search(contextObj)
    
    res.render("influencer/index",{influencers:r});
};