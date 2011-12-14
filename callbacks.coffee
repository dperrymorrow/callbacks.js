window.dpm ?= {}

class window.dpm.Callbacks
  @get: -> @instance ?= new @

  constructor:->
    @triggers = {}

  addCallback:(trigger, instance, method) ->
    @triggers[trigger] ?= []
    @triggers[trigger].push
      name: trigger
      instance: instance
      action: method

  removeCallback:(trigger, instance) ->
    @triggers = (listener for listener in @triggers[trigger] when listener.instance != instance)

  removeTrigger:(trigger) ->
    @triggers[trigger] = null

  fireCallback:(trigger, param) ->
    return if !@triggers[trigger]

    for listener in @triggers[trigger]
      listener.instance[listener.action]( param )
