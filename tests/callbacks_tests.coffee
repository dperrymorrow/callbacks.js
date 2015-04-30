

# run through whole test suite with static and instance versions
describe "Callbacks.js", ->
  class TestListener
    constructor:(@msg) ->
    callbackFunction:(@msg) ->

  staticInst = Callbacks.getInstance()
  inst = new Callbacks()
  instance = staticInst
  listener = {}
  
  for instance in [inst, staticInst] 
    beforeEach ->
      listener = new TestListener("before each");
      instance.addCallback 'testEvent', listener, 'callbackFunction'

    it "Callbacks should have stored the callback", ->
      expect(instance.triggers.testEvent).not.toBeUndefined
      
    it "recieves the callback when fired", ->
      instance.fireCallback 'testEvent'
      expect(listener.callbackFunction).toHaveBeenCalled
      
    it "triggers should be empty when removed", ->
      instance.removeCallback 'testEvent', listener
      expect(instance.triggers.testEvent).toBeUndefined

    it "does not call the function after the listener is removed", ->
      instance.removeCallback 'testEvent', listener
      spyOn(listener, 'callbackFunction').and.callThrough
      instance.fireCallback 'testEvent'
      expect(listener.callbackFunction).not.toHaveBeenCalled
      
    it "will pass through a param if one is sent", ->
      msg = "hello I am the message"
      spyOn(listener, 'callbackFunction').and.callThrough
      instance.fireCallback 'testEvent', msg
      expect(listener.callbackFunction).toHaveBeenCalledWith msg
      
    it "the correct scope is used when calling the method", ->
      msg = "hello I am the message"
      instance.fireCallback 'testEvent', msg
      expect(listener.msg).toEqual msg
      
    # it "does not add the listener more than once", ->
    #   spyOn listener, 'callbackFunction'
    #   listener.callbackFunction.reset
      
    #   for x in [1...50] by 1
    #     instance.addCallback "testEvent", listener, 'callbackFunction'
        
    #   console.log(instance.triggers)
    #   instance.fireCallback 'testEvent'
    #   expect(listener.callbackFunction.calls.count()).toBe 1