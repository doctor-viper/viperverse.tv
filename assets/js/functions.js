/**
 * Document.ready function
 * 
 */
$( document ).ready(function() {

  get_random_packages(true);

});



/**
 * Gets random ficticious Viperverse 
 * themed NPM package descriptions 
 *
 */
function get_random_packages(console = false) {
  $.ajax({
    url:      '/api/v1/packages/index.php',
    type:     'POST',
    dataType: 'json',
    success:  function(data) {
      if(console) {
        viperverse_console(data);
      }
    },
    error: function (xhr, ajaxOptions, thrownError) {
      console.log(xhr.status);
      console.log(thrownError);
      console.log(xhr.responseText);
    }
  });

}


/**
 * Default console gibberish, spit out in monospace
 * doesn't do anything, just silly fun
 * 
 */
function viperverse_console(data) {

console.log(`%c
WELCOME TO THE
 _    __________  __________ _    ____________  _____ ______
| |  / /  _/ __ \\/ ____/ __ \\ |  / / ____/ __ \\/ ___// ____/
| | / // // /_/ / __/ / /_/ / | / / __/ / /_/ /\\__ \\/ __/   
| |/ // // ____/ /___/ _, _/| |/ / /___/ _, _/___/ / /___   
|___/___/_/   /_____/_/ |_| |___/_____/_/ |_|/____/_____/ 

KNOWLEDGE IS POWER - FOR REAL.

LOADING: 
- ${data[0]}
- ${data[1]}
- ${data[2]}
- ${data[3]}
- ${data[4]}

viper:\\>`,
`font-family:monospace`
);

}