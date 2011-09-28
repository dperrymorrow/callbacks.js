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
    }
    Callbacks.prototype.addCallback = function(trigger, instance, method) {
      if (typeof this.triggers[trigger] === "undefined") {
        this.triggers[trigger] = [];
      }
      return this.triggers[trigger].push({
        obj: instance,
        action: method
      });
    };
    Callbacks.prototype.removeCallback = function(trigger, instance, method) {
      var i, _results;
      i = 0;
      _results = [];
      while (i < this.triggers[trigger].length) {
        if (this.triggers[trigger][i].action !== method) {
          this.triggers[trigger][i] === null;
          return;
        }
        _results.push(i++);
      }
      return _results;
    };
    Callbacks.prototype.removeTrigger = function(trigger) {
      return this.callbacks.triggers[trigger] = null;
    };
    Callbacks.prototype.fireCallback = function(trigger, param) {
      var i, listener, _results;
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
      _results = [];
      while (i < this.triggers[trigger].length) {
        listener = this.triggers[trigger][i];
        if (typeof listener.action !== "undefined") {
          listener.obj[listener.action](param);
        }
        _results.push(i++);
      }
      return _results;
    };
    return Callbacks;
  })();
}).call(this);
