var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");

//Database Variables
var mongoose = require("mongoose");
var mongoURI = "mongodb://localhost:27017/realestate";
var MongoDB = mongoose.connect(mongoURI).connection;


MongoDB.on("error", function(err){
  console.log("Mongo Connection Error :" + err);
});


MongoDB.once("open", function(){
  console.log("MongoDB is connected! Good Work!");
});

//Set the port
app.set("port", (process.env.PORT || 5000));

//Routes
//base get
app.get("/", function(req,res){
  res.sendFile(path.resolve("server/public/views/index.html"));
});

//Middleware hookups
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("./server/public/"));

//Listen
app.listen(app.get("port"), function(){
    console.log("Listening on port: " + app.get("port"));
});
