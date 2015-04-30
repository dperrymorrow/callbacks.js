

# run through whole test suite with static and instance versions
describe "Listen.js Events", ->
  class TestListener
    constructor:(@msg) ->
    callbackFunction2:(@msg) ->
    callbackFunction:(@msg) ->

  staticInst = Listen.instance
  inst = new Listen()
  instance = staticInst
  listener = {}
  
  # for instance in [inst, staticInst] 
  beforeEach ->
    listener = new TestListener("before each");
    instance.register 'testEvent'
    instance.add 'testEvent', 'callbackFunction', listener
    
  afterEach ->
    instance.unregister 'testEvent'
    console.log(JSON.stringify(instance.triggers, null, 2))

  it "Callbacks should have stored the callback", ->
    expect(instance.triggers.testEvent).not.toBeUndefined
    
  it "Throws an error if you add the same listener twice", ->
    expect(-> instance.add('testEvent', 'callbackFunction', listener)).toThrow();
    
  it "recieves the callback when fired", ->
    instance.trigger 'testEvent'
    expect(listener.callbackFunction).toHaveBeenCalled
    
  it "triggers should be empty when removed", ->
    instance.remove 'testEvent', listener
    expect(instance.triggers.testEvent).toBeUndefined

  it "does not call the function after the listener is removed", ->
    spyOn(listener, 'callbackFunction').and.callThrough
    instance.remove 'testEvent', 'callbackFunction', listener,
    instance.trigger 'testEvent'
    expect(listener.callbackFunction).not.toHaveBeenCalled
    
  it "will pass through a param if one is sent", ->
    msg = "hello I am the message"
    spyOn(listener, 'callbackFunction').and.callThrough
    instance.trigger 'testEvent', msg
    expect(listener.callbackFunction).toHaveBeenCalledWith msg
    
  it "the correct scope is used when calling the method", ->
    msg = "hello I am the message"
    instance.trigger 'testEvent', msg
    expect(listener.msg).toEqual msg
    