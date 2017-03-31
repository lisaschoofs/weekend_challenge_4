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
    }//end success
  });//end ajax
}
