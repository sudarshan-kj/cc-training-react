
==========================================================================================================================

1.

function loadScript(src) {
  let script = document.createElement('script');
  script.src = src;
  document.head.append(script);
}


loadScript("/someScript.js");
//other statements here.
someFunctionInsideSomeScript(); //throws an error




==========================================================================================================================

2. Fix:

a: 
function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;
  script.onload = () => callback(script);
  document.head.append(script);
}


b:
loadScript('/someScript.js', function() {
  // the callback runs after the script is loaded
  someFunctionInsideSomeScript(); // works
});


==========================================================================================================================


3: Live example:

function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;
  script.onload = () => callback(script);
  document.head.append(script);
}

loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
  alert(`Cool, the script ${script.src} is loaded`);
  alert( _ ); // function declared in the loaded script
});

==========================================================================================================================



Callback in callback


1: 
loadScript('/my/script.js', function(script) {

  loadScript('/my/script2.js', function(script) {

    loadScript('/my/script3.js', function(script) {
      // ...to run after all scripts are loaded
    });

  });

});


==========================================================================================================================


Handling Errors:

function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Script load error for ${src}`));

  document.head.append(script);
}




loadScript('/my/script.js', function(error, script) {
  if (error) {
    // handle error
  } else {
    // script loaded successfully
  }
});


==========================================================================================================================


Pyramid of Doom


loadScript('1.js', function(error, script) {

  if (error) {
    handleError(error);
  } else {
    // ...
    loadScript('2.js', function(error, script) {
      if (error) {
        handleError(error);
      } else {
        // ...
        loadScript('3.js', function(error, script) {
          if (error) {
            handleError(error);
          } else {
            // ...continue after all scripts are loaded
          }
        });

      }
    });
  }
});