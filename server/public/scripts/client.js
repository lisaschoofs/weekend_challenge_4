$(document).ready(function() {
  getListings();
  eventListeners();
}); //end doc ready

function eventListeners() {

  $("#addListing").on("click", function() {
    $( "#listingForm" ).toggle( "slow" );
  });//end on click function

  $("#listingForm").on("submit", function(event){
    event.preventDefault();
    console.log('submit button clicked');
    var type = $("#propertyType").val();
    var city = $("#cityInput").val();
    var sqft = $("#sqft").val();
    var price = $("#price").val();
    console.log(type, city, sqft, price);

      $.ajax({
        type: "POST",
        url: "/listings",
        data: {type: type, city: city, sqft: sqft, price: price},
        success: function(response) {
          getListings(response);
          console.log(response);
        }//end success
      }); //end ajax
      $("#listingForm").trigger('reset');
      $( "#listingForm" ).toggle( "slow" );
      // $("#newListing").append("<div class='alert alert-success alert-dismissible'" +
      //                     "role='alert'>Property Added!" +
      //                     "<button type='button' class='close' data-dismiss='alert'" +
      //                     " aria-label='Close'><span aria-hidden='true'>&times;" +
      //                     "</span></button></div>");
    }); //end listener
}//end form submit

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

function appendListings(listings) {
    $("#listings").empty();
    for (var i = 0; i < listings.length ; i++) {
        var listing = listings[i];
        if (listing.cost) {
          appendSale(listing);
        } else {
          appendRental(listing);
        }//ends else
  } //ends for loop
} //ends appendListings

function appendRental(listing) {
$("#rentalListings").append("<div class='well col-md-3 col-xs-6'></div>");
  var $el = $("#rentalListings").children().last();
  $el.append("<p>Square Footage: " + listing.sqft + "</p>" +
            "<p> Rent : $" + listing.rent + "</p>" +
            "<p>City: " + listing.city + "</p>" +
            "<p><b> For Rent </b><p>");
} //end appendRental function

function appendSale(listing) {
$("#saleListings").append("<div class='well col-md-3 col-xs-6'></div>");
  var $el = $("#saleListings").children().last();
  $el.append("<p>Square Footage: " + listing.sqft + "</p>" +
            "<p> Cost : $" + listing.cost + "</p>" +
            "<p>City: " + listing.city + "</p>" +
            "<p><b> For Sale </b><p>");
} //end appendSale function
