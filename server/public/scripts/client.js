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

    $("#addListing").on("click", function() {
      $( "#listingForm" ).toggle( 'slow' );
    });//end on click function
}); //end doc ready

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
    for (var i = 0; i < listings.length; i++) {
        var listing = listings[i];
        // console.log(listing);
        appendListing(listing);
  } //ends for loop
} //ends appendListings

function appendListing(listing) {
  var $el = $("#listings").children().last();
  if (listing.cost) {
    $("#listings").append("<div class='well col-md-3' id='testS'></div>");
    $el.append("<p> For Sale <p>" +
    "<p> Cost: $" + listing.cost + "</p>");
  } else {
    $("#listings").append("<div class='well col-md-3' id='testR'></div>");
    $el.append("<p> For Rent <p>" +
    "<p> Rent : $" + listing.rent + "</p>");
  } //ends else
  $el.append("<p>City: " + listing.city + "</p>");
  $el.append("<p>Square Footage: " + listing.sqft + "</p>");
} //end appendListing function
