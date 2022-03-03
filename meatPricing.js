
$(document).ready(function () {
  // FETCHING DATA FROM JSON FILE
  $.getJSON("meatPricing.json", function (data) {
    var meat = "";

    // ITERATING THROUGH OBJECTS
    $.each(data, function (key, value) {
      //CONSTRUCTION OF ROWS HAVING
      // DATA FROM JSON OBJECT
      meat += '<div class="row mb3">';
      meat += '<div class="col">' + value.Cut + "</div>";

      meat += '<div class="col">' + value.AverageSizePerCut + "</div>";

      meat += '<div class="col">' + value.PricePerLbs + "</div>";

      meat += "</div>";
    });

    //INSERTING ROWS INTO TABLE
    $("#tableInfo").append(meat);
  });
});
