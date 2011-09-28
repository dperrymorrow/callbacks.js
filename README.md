# Callbacks.js

### lets you globally listen for events across all scopes and instances. Callbacks is a singleton, so you can access it from anywhere.

## example

     // your function you want to handle the event
     function callbackListener(obj){
       console.log( "callback fired passed in " + obj );
     }
     
     // add your callback with your scope and function, pass in your method as a string
     window.dpm.Callbacks.get().addCallback('testCallback',this,'callbackListener');
     
     // then somewhere else, does not matter the scope, fire the callback, 
     window.dpm.Callbacks.get().fireCallback('testCallback',{foo:"bar"});
     
     // if you want to remove a listener, simply...
     window.dpm.Callbacks.get().removeCallback:('testCallback', this, 'callbackListener');

