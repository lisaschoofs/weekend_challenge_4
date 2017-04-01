$(document).ready(function() {
  console.log("jQuery ready to rock");
  getListings();
});

function getListings() {
  $.ajax({
    type: "GET",
    url: "/listings",
    success: function(response){
      console.log(response);
      appendListings(response);
    }//end success
  });//end ajax
}

function appendListings(listings) {
for(var i = 0; i < listings.length; i++){
  var listing = listings[i];
  console.log(listing);
  $("#listings").append("<div class='well col-md-3'></div>");
  var $el = $("#listings").children().last();
  $el.append("<p>" + listing.city + "</p>");
  $el.append("<p>" + listing.cost + "</p>");
  $el.append("<p>" + listing.rent+ "</p>");
  $el.append("<p>" + listing.sqft + "</p>");
}
}
