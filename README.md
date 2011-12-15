# Callbacks.js
lets you globally listen for events either across all classes and instances, or on an instance based level.

- Callbacks can be a singleton, so you can access it from anywhere.
- Callbacks can be used as an instance, or you can extend the class with another to listen for events from that class.
- Framework independent

## Static Instance Usage

````javascript
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
````

## Instance based usage

````javascript
// your function you want to handle the event
function callbackListener(obj){
  console.log( "callback fired passed in " + obj );
}

// instantiate it and then use it.
var inst = new dpm.Callbacks();
inst.addCallback('testCallback',this,'callbackListener');
inst.fireCallback('testCallback',{foo:"bar"});
````

## Tests, yes I have tests...
Please look in the tests directory, not only will this give you a sense of the use cases, but verifies that this class is working as advertised. If you do any pull requests, please add more tests for new features.