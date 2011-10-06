(function() {
  var _ref;
    if ((_ref = window.dpm) != null) {
    _ref;
  } else {
    window.dpm = {};
  };
  window.dpm.Callbacks = (function() {
    Callbacks.get = function() {
      var _ref2;
      return (_ref2 = this.instance) != null ? _ref2 : this.instance = new this;
    };
    function Callbacks() {
      this.triggers = {};
      this.debug = false;
      return;
    }
    Callbacks.prototype.addCallback = function(trigger, instance, method) {
      if (typeof this.triggers[trigger] === "undefined") {
        this.triggers[trigger] = [];
      }
      this.triggers[trigger].push({
        obj: instance,
        action: method
      });
    };
    Callbacks.prototype.removeCallback = function(trigger, instance, method) {
      var i;
      i = 0;
      while (i < this.triggers[trigger].length) {
        if (this.triggers[trigger][i].action !== method) {
          this.triggers[trigger][i] === null;
          return;
        }
        i++;
      }
    };
    Callbacks.prototype.removeTrigger = function(trigger) {
      this.callbacks.triggers[trigger] = null;
    };
    Callbacks.prototype.fireCallback = function(trigger, param) {
      var i, listener;
      if (typeof this.triggers[trigger] === "undefined") {
        if (this.debug === true) {
          console.log("no listeners registered for " + trigger);
        }
        return;
      }
      if (this.debug) {
        console.log(trigger);
        console.log("" + trigger + " fired, " + this.triggers[trigger].length + " listeners");
      }
      i = 0;
      while (i < this.triggers[trigger].length) {
        listener = this.triggers[trigger][i];
        if (typeof listener.action !== "undefined") {
          listener.obj[listener.action](param);
        }
        i++;
      }
    };
    return Callbacks;
  })();
}).call(this);
