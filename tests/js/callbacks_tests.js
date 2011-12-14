

var TestListener = function(){
  this.callbackFunction = function(msg){
    this.msg = msg;
  }
}

window.testClass = new TestListener();

$(document).ready(function(){

  test("Test Static Usage of Class", function() {
    var inst = dpm.Callbacks.get();
    ok( inst, 'instance should not be null' );

    inst.addCallback( 'testEvent', window.testClass, 'callbackFunction' );
    inst.fireCallback( 'testEvent', 'first event fired' );

    equal( window.testClass.msg, 'first event fired', 'should have recieved the listener from Callbacks with message' );

    inst.removeCallback( 'testEvent', window.testClass );
    inst.fireCallback( 'testEvent', 'second event fired' );

    equal( window.testClass.msg, 'first event fired', 'should have not recieved the listener from Callbacks and message should still be the first one' );

    inst.addCallback( 'testEvent', window.testClass, 'callbackFunction' );
    inst.fireCallback( 'testEvent', 'second event fired' );
    equal( window.testClass.msg, 'second event fired', 'should have recieved the listener from Callbacks and message should be the second one' );

    inst.removeTrigger( 'testEvent' );
    inst.fireCallback( 'testEvent', 'second event fired' );
    equal( window.testClass.msg, 'second event fired', 'should not have recieved the listener from Callbacks and message should be the second one' );
  });

  test("Test instantiating callbacks", function() {
    var inst = new dpm.Callbacks();
    ok( inst, 'instance should not be null' );

    inst.addCallback( 'testEvent', window.testClass, 'callbackFunction' );
    inst.fireCallback( 'testEvent', 'first event fired' );

    equal( window.testClass.msg, 'first event fired', 'should have recieved the listener from Callbacks with message' );

    inst.removeCallback( 'testEvent', window.testClass );
    inst.fireCallback( 'testEvent', 'second event fired' );

    equal( window.testClass.msg, 'first event fired', 'should have not recieved the listener from Callbacks and message should still be the first one' );

    inst.addCallback( 'testEvent', window.testClass, 'callbackFunction' );
    inst.fireCallback( 'testEvent', 'second event fired' );
    equal( window.testClass.msg, 'second event fired', 'should have recieved the listener from Callbacks and message should be the second one' );

    inst.removeTrigger( 'testEvent' );
    inst.fireCallback( 'testEvent', 'second event fired' );
    equal( window.testClass.msg, 'second event fired', 'should not have recieved the listener from Callbacks and message should be the second one' );
  });

});