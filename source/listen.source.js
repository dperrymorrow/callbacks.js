
class Listen {
  
  constructor() {
    this.triggers = {}
    Listen._instance = this
  }
  
  register(event) {
    if (!this.triggers[event]) {
      this.triggers[event] = []
    } 
  }
  
  add(event, method, scope, maxCalls=0) {
    if (!this.triggers[event]) {
      throw new Error(`${event} must be registered before you can add listeners to it`)
    }
    
    if (!this.findEvent(this.triggers[event], method, scope)) {
      this.triggers[event].push({
        method: method,
        scope: scope,
        callCount: 0,
        maxCall: 0
      })
    } else {
      throw new Error(`${method} has already been added as a listener to ${event}`)
    }
  }
  
  findEvent(eventQue, method, scope) {
    return eventQue.find(x => x.scope === scope && x.method === method)
  }
  
  remove(event, method, scope) {
    let eventQue = this.triggers[event]
    if (eventQue) {
      let index = eventQue.findIndex(x => x.scope === scope && x.method === method) 
      eventQue.slice(index, 0)
    }
  }
  
  removeScope(event, scope) {
    
  }
  
  unregister(event) {
    delete this.triggers[event]
  }
  
  trigger(event, params=null) {
    let eventQue = this.triggers[event]
    if (!eventQue) {
      throw new Error(`${event} has not been registered, and cannot be called`)
    }
    
    eventQue.forEach(function(obj) {
      obj.scope[obj.method](params)
    })
  }
  
  static get instance() {
    return this._instance || new Listen()
  }
}