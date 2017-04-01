var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

var RentSchema = mongoose.Schema({
  rent: Number,
  sqft: Number,
  city: String
});

var BuySchema = mongoose.Schema({
  cost: Number,
  sqft: Number,
  city: String
});

var Rental = mongoose.model("Rent_Listing", RentSchema, 'listings');
var Buy = mongoose.model("Buy_Listing", BuySchema, 'listings');

//GET listings
router.get("/", function(req,res){
  //Get all listings
  Rental.find(function(err, allListings){
    if(err){
      console.log(err);
      res.sendStatus(500);
    }
    // console.log(allListings);
    res.send(allListings);
  });
});

//POST new listing to Database
router.post("/", function(req,res){

  console.log(req.params);
  console.log(req.body);
  var listing = new Rental();

  listing.city = req.body.city;
  listing.sqft = req.body.sqft;
  listing.rent = req.body.rent;

  listing.save(function(err, savedListing){
    if(err){
      console.log(err);
      res.sendStatus(500);
    }
console.log(savedListing);
    res.send(savedListing);
  });
});


module.exports = router;
