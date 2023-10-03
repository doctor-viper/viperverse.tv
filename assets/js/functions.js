
$( document ).ready(function() {
  console.log( "ready!" );

  $(document).keydown(function(keyPressed) {
    if (keyPressed.keyCode == 89) {
      showGame();
    }
  });
  
  $(document).keydown(function(keyPressed) {
    if (keyPressed.keyCode == 27) {
      showTerminal();
    }
  });
  
  $(".y-btn").on("click", function(){
    showGame();
  });

});

function showGame() {
  $(".line,.line6").fadeOut( "slow", function() {
    $("svg").fadeIn();
    $(".fake-toolbar,.fake-button").addClass("viperverse");
  });
}

function showTerminal() {
  $("svg").fadeOut("slow", function(){
    $(".line,.line6").fadeIn();
    $(".fake-toolbar,.fake-button").removeClass("viperverse");
  });
}

// TO-DO
/*

  every time the terminal redraws write a simple 
  service to dynamically / randomly get titles and order

*/