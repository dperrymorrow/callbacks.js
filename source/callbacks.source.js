class Callbacks {
  
  
  constructor() {
    this.triggers = [];
    Callbacks.instance = this;
  }
  
  addCallback(eventName, instance, functionName) {
    
  }
  
  removeCallback(eventName, instance, functionName) {
    
  }
  
  fireCallback(eventName, params) {
    
  }
  
  
  static getInstance() {
    return Callbacks.instance || new Callbacks();
  }
}