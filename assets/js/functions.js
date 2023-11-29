/**
 * Document.ready function
 * 
 */
$( document ).ready(function() {

  // get random packages off the bat
  get_random_packages();

  // event listener for y button
  $(document).keydown(function(keyPressed) {
    if (keyPressed.keyCode == 89) {
      showGame();
    }
  });
  
  // event listener for esc key
  $(document).keydown(function(keyPressed) {
    if (keyPressed.keyCode == 27) {
      get_random_packages();
      showTerminal();
    }
  });
  
  // "y" btn click event listener
  $(".y-btn").on("click", function(){
    showGame();
  });

});


/**
 * Gets random NPM package descriptions
 * for the vipos install script
 * 
 */
function get_random_packages() {
  $.ajax({
    url:      '/api/v1/packages/index.php',
    type:     'POST',
    dataType: 'json',
    success:  function(data) {
      $(".line3 .text").text(data[0]);
      $(".line4 .text").text(data[1]);
      $(".line5 .text").text(data[2]);
      $(".line6 .text").text(data[3]);
      $(".line7 .text").text(data[4]);
    },
    error: function (xhr, ajaxOptions, thrownError) {
      console.log(xhr.status);
      console.log(thrownError);
      console.log(xhr.responseText);
    }
  });
}


/**
 * Shows the 'game' version of the
 * terminal window
 * 
 */
function showGame() {
  $(".line,.line8,.doc-img").fadeOut( "fast", function() {
    $(".doc-terminal").addClass("full-width");
    $("svg,.exit-instructions").fadeIn();
    $(".fake-toolbar,.fake-button").addClass("viperverse");    
  });
}


/**
 * Shows the npm install script version
 * of the terminal window
 * 
 */
function showTerminal() {
  $("svg,.exit-instructions").fadeOut("slow", function(){
    $(".doc-terminal").removeClass("full-width");
    setTimeout(function(){
      //wait for card1 flip to finish and then flip 2
      $(".line,.line8,.doc-img").fadeIn();
      $(".fake-toolbar,.fake-button").removeClass("viperverse");
    }, 100);    
  });
}