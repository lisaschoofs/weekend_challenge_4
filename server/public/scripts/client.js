$(document).ready(function() {
  console.log("jQuery ready to rock");
  getListings();
  newRental();
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
}//ends getListings

function newRental() {
  $.ajax({
    type: "POST",
    url: "/listings",
    data: {city: "test4",
           sqft: 1004,
           rent: 1004
          },
    success: function(response){
      // appendListings();
      console.log(response);
    }
  });
}

function appendListings(listings) {
    for (var i = 0; i < listings.length; i++) {
        var listing = listings[i];
        // console.log(listing);
        $("#listings").append("<div class='well col-md-3'></div>");
        var $el = $("#listings").children().last();
        $el.append("<p>" + listing.city + "</p>");
        $el.append("<p>" + listing.sqft + "</p>");
    if (listing.cost) {
        $el.append("<p> Available for Purchase!<p>" +
                   "<p> Cost: $" + listing.cost + "</p>");
    } else {
        $el.append("<p> Available for Rent!<p>" +
                   "<p> Monthly Rent : $" + listing.rent + "</p>");
    } //ends else
  } //ends for loop
} //ends appendListings

// function addListing() {
//   $.ajax({
//     type: "POST",
//     url: "/listings/:" + id,
//     data: {city: "", sqft: "", cost: "", rent: ""},
//     success: function(response){
//       // appendListings();
//       console.log(response);
//     }
//   });
// }
//
// }



function newHouse() {

}
