/**
 * Document.ready function
 * 
 */
$( document ).ready(function() {


console.log(`%c
WELCOME TO THE
 _    __________  __________ _    ____________  _____ ______
| |  / /  _/ __ \\/ ____/ __ \\ |  / / ____/ __ \\/ ___// ____/
| | / // // /_/ / __/ / /_/ / | / / __/ / /_/ /\\__ \\/ __/   
| |/ // // ____/ /___/ _, _/| |/ / /___/ _, _/___/ / /___   
|___/___/_/   /_____/_/ |_| |___/_____/_/ |_|/____/_____/ 

KNOWLEDGE IS POWER - FOR REAL.

viper:\\>
`,`font-family:monospace`);

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