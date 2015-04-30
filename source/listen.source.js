class Listen {
  
  
  constructor() {
    this.triggers = {};
    Listen._instance = this;
  }
  
  add(eventName, instance, functionName) {
    this.triggers[eventName]
  }
  
  remove(eventName, instance, functionName) {
    
  }
  
  trigger(eventName, params = null) {
    
  }
  
  registerSignal(signalName) {
    
  }
  
  static get instance() {
    return Listen._instance || new Listen();
  }
}