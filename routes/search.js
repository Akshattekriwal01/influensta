'use strict'
var express = require('express');
var router = express.Router();
const searchController = require("../controllers/search");

/* GET users listing. */
router.get("/",searchController.getSearchResult)

module.exports = router;
  