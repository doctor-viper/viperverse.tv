
$( document ).ready(function() {

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
  $(".line,.line6,.doc-img").fadeOut( "fast", function() {
    $(".doc-terminal").addClass("full-width");
    $("svg,.exit-instructions").fadeIn();
    $(".fake-toolbar,.fake-button").addClass("viperverse");    
  });
}

function showTerminal() {
  $("svg,.exit-instructions").fadeOut("slow", function(){
    $(".doc-terminal").removeClass("full-width");
    setTimeout(function(){
      //wait for card1 flip to finish and then flip 2
      $(".line,.line6,.doc-img").fadeIn();
      $(".fake-toolbar,.fake-button").removeClass("viperverse");
    }, 100);    
  });
}

// TO-DO
/*

  every time the terminal redraws write a simple 
  service to dynamically / randomly get titles and order

*/