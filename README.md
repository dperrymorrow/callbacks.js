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

## MIT licensed:
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.