//hide all the open boxes
$(".open-box").css("display", "none")

//loop to associate the closed-box with its open-box
var i = 0;
var numberOfBoxes = $(".closed-box").length;

while (i <= numberOfBoxes) {
  function iffe(i) {
    //on clicking a closed box...
    $(".closed-box").eq(i).click(function() {
      //close all the boxes that may already have been opened
      $(".open-box").slideUp();
      //if the open-box associated with the box we're clicking on is closed, open it
      if ($(".open-box").eq(i).is(":hidden")) {
        $(".open-box").eq(i).slideDown("slow");
        //otherwise, hide any open boxes
      } else {
        $(".open-box").slideUp();
      }
    });
  }
  iffe(i);
  i++;
}
//when user clicks on close button, open boxes close
$(".close-button").click(function() {
  $(".open-box").slideUp();
});