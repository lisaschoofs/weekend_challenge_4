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

// { type: 'Sale',
//   city: 'St Louis Park',
//   sqft: '500',
//   price: '500000' }

//POST new listing to Database
router.post("/", function(req,res){
var listing;
  console.log(req.body);
  if (req.body.type === "Rent") {
    var rental = new Rental();
    rental.city = req.body.city;
    rental.sqft = parseInt(req.body.sqft);
    rental.cost = parseInt(req.body.price);

    rental.save(function(err, savedListing){
      if(err){
        console.log(err);
        res.sendStatus(500);
      }
  console.log(savedListing);
      res.send(savedListing);
    });
  }//ends if
  else {
    var buy = new Buy();

    buy.city = req.body.city;
    buy.sqft = parseInt(req.body.sqft);
    buy.cost = parseInt(req.body.price);

    buy.save(function(err, savedListing){
      if(err){
        console.log(err);
        res.sendStatus(500);
      }
  console.log(savedListing);
      res.send(savedListing);
    });
}//ends elses
});


module.exports = router;
