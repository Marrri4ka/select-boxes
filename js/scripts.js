$(document).ready(function() {
  $(".btn").click(function(event) {
    var beverage = $("#beverage").val();

    
    $(".order").text(beverage);
    $("p").show();


    event.preventDefault();
  });
});