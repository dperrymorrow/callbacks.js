
  
window.dpm ?= {}

class window.dpm.Callbacks
  
  #singleton
  @get: -> @instance ?= new @
  
  constructor:->
    @triggers={}
    @debug=false
    return

  addCallback:(trigger, instance, method) ->
    if typeof @triggers[trigger] == "undefined"
      @triggers[trigger] = []

    @triggers[trigger].push( {obj: instance,action: method} )
    return


  removeCallback:(trigger, instance, method) ->
    i = 0

    while i < @triggers[trigger].length
      unless @triggers[trigger][i].action == method
        @triggers[trigger][i] == null
        return
      i++
    
    return

  removeTrigger:(trigger) ->
    @callbacks.triggers[trigger] = null
    return

  fireCallback:(trigger, param) ->
    if typeof @triggers[trigger] == "undefined"
      console.log( "no listeners registered for #{trigger}")  if @debug == true
      return
    if @debug
      console.log( trigger)
      console.log( "#{trigger} fired, #{@triggers[trigger].length} listeners")
    i = 0

    while i < @triggers[trigger].length
      listener = @triggers[trigger][i]
      listener.obj[listener.action]( param )  unless typeof listener.action == "undefined"
      i++
    
    return

