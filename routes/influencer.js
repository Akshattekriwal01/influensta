'use strict'
var express = require('express');
var router = express.Router();
const influencerController = require("../controllers/influencer");

/* GET users listing. */
router.post("/",influencerController.createInfluencer)
router.get("/getin", (req,res,next) =>{

    res.render("influencer/create");
})

module.exports = router;
   