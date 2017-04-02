$(document).ready(function() {
  console.log("jQuery ready to rock");
  getListings();

  $("#listingForm").on("submit", function(event){
    event.preventDefault();
    console.log('submit button clicked');
    var type = $("#propertyType").val();
    console.log(type);
    var city = $("#cityInput").val();
    console.log(city);
    var sqft = $("#sqft").val();
    console.log(sqft);
    var price = $("#price").val();

      $.ajax({
        type: "POST",
        url: "/listings",
        data: {type: type, city: city, sqft: sqft, price: price},
        success: function(response) {
          appendListing(response);
          getListings(response);
          console.log(response);
        }//end success
      }); //end ajax
    }); //end listener
}); //end doc ready

function appendListings(listings) {
    $("#listings").empty();
    for (var i = 0; i < listings.length; i++) {
        var listing = listings[i];
        console.log(listing);
        $("#listings").append("<div class='well col-md-3'></div>");
        var $el = $("#listings").children().last();
        $el.append("<p>" + listing.city + "</p>");
        $el.append("<p>" + listing.sqft + "</p>");
    if (listing.cost) {
        $el.append("<p> For Sale <p>" +
                   "<p> Cost: $" + listing.cost + "</p>");
    } else {
        $el.append("<p> For Rent <p>" +
                   "<p> Monthly Rent : $" + listing.rent + "</p>");
    } //ends else
  } //ends for loop
} //ends appendListings

function appendListing(listing) {
  $("#listings").append("<div class='well col-md-3'></div>");
  var $el = $("#listings").children().last();
  $el.append("<p>" + listing.city + "</p>");
  $el.append("<p>" + listing.sqft + "</p>");
if (listing.cost) {
  $el.append("<p> For Sale <p>" +
             "<p> Cost: $" + listing.cost + "</p>");
} else {
  $el.append("<p> For Rent <p>" +
             "<p> Monthly Rent : $" + listing.rent + "</p>");
           } //ends else
         } //end functions



function getListings() {
  $.ajax({
    type: "GET",
    url: "/listings",
    success: function(response){
      console.log(response);
      appendListings(response);
    }//end success
  });//end ajax
}//ends getListings
