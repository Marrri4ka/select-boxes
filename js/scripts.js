// $(document).ready(function() {
//   $(".btn").click(function(event) {
//     var beverage = $("#beverage").val();
// 
// 
//     $(".order").text(beverage);
//     $("p").show();
// 
// 
//     event.preventDefault();
//   });
// });

$(document).ready(function() {
  $(".btn").click(function(event) {
    var dob = $("#born").val();  
    
  $("#date").text(dob);
  $("#date").show();
  
  event.preventDefault();
  });
});

