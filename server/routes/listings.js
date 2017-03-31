var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");


var RentSchema = mongoose.Schema({
  cost: Number,
  sqft: Number,
  city: String
});

var BuySchema = mongoose.Schema({
  rent: Number,
  sqft: Number,
  city: String
});

var Rent = mongoose.model("Rent_Listing", RentSchema, 'listings');
var Buy = mongoose.model("Buy_Listing", BuySchema, 'listings');

//GET listings
router.get("/", function(req,res){
  //Get all listings
  Rent.find(function(err, allListings){
    if(err){
      console.log(err);
      res.sendStatus(500);
    }
    console.log(allListings);
    res.send(allListings);
  });
});

module.exports = router;
