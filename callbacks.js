(function() {
  var _ref;

  if ((_ref = window.dpm) == null) window.dpm = {};

  window.dpm.Callbacks = (function() {

    Callbacks.get = function() {
      var _ref2;
      return (_ref2 = this.instance) != null ? _ref2 : this.instance = new this;
    };

    function Callbacks() {
      this.triggers = {};
    }

    Callbacks.prototype.addCallback = function(trigger, instance, method) {
      var _base, _ref2;
      if ((_ref2 = (_base = this.triggers)[trigger]) == null) _base[trigger] = [];
      return this.triggers[trigger].push({
        name: trigger,
        instance: instance,
        action: method
      });
    };

    Callbacks.prototype.removeCallback = function(trigger, instance) {
      var listener;
      return this.triggers = (function() {
        var _i, _len, _ref2, _results;
        _ref2 = this.triggers[trigger];
        _results = [];
        for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
          listener = _ref2[_i];
          if (listener.instance !== instance) _results.push(listener);
        }
        return _results;
      }).call(this);
    };

    Callbacks.prototype.removeTrigger = function(trigger) {
      return this.triggers[trigger] = null;
    };

    Callbacks.prototype.fireCallback = function(trigger, param) {
      var listener, _i, _len, _ref2, _results;
      if (!this.triggers[trigger]) return;
      _ref2 = this.triggers[trigger];
      _results = [];
      for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
        listener = _ref2[_i];
        _results.push(listener.instance[listener.action](param));
      }
      return _results;
    };

    return Callbacks;

  })();

}).call(this);
