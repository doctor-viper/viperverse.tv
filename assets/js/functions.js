$(document).keydown(function(keyPressed) {
  if (keyPressed.keyCode == 89) {
    $(".line,.line6").fadeOut( "slow", function() {
      $("svg").fadeIn();
      $(".fake-toolbar,.fake-button").addClass("viperverse");
    });
  }
});

$(document).keydown(function(keyPressed) {
  if (keyPressed.keyCode == 27) {
    $("svg").fadeOut("slow", function(){
      $(".line,.line6").fadeIn();
      $(".fake-toolbar,.fake-button").removeClass("viperverse");
    });
  }
});