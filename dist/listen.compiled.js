"use strict";

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var Listen = (function () {
  function Listen() {
    _classCallCheck(this, Listen);

    this.triggers = {};
    Listen._instance = this;
  }

  _createClass(Listen, [{
    key: "register",
    value: function register(event) {
      if (!this.triggers[event]) {
        this.triggers[event] = [];
      }
    }
  }, {
    key: "add",
    value: function add(event, method, scope) {
      var maxCalls = arguments[3] === undefined ? 0 : arguments[3];

      if (!this.triggers[event]) {
        throw new Error("" + event + " must be registered before you can add listeners to it");
      }

      if (!this.findEvent(this.triggers[event], method, scope)) {
        this.triggers[event].push({
          method: method,
          scope: scope,
          callCount: 0,
          maxCall: 0
        });
      } else {
        throw new Error("" + method + " has already been added as a listener to " + event);
      }
    }
  }, {
    key: "findEvent",
    value: function findEvent(eventQue, method, scope) {
      return eventQue.find(function (x) {
        return x.scope === scope && x.method === method;
      });
    }
  }, {
    key: "remove",
    value: function remove(event, method, scope) {
      var eventQue = this.triggers[event];
      if (eventQue) {
        var index = eventQue.findIndex(function (x) {
          return x.scope === scope && x.method === method;
        });
        eventQue.slice(index, 0);
      }
    }
  }, {
    key: "removeScope",
    value: function removeScope(event, scope) {}
  }, {
    key: "unregister",
    value: function unregister(event) {
      delete this.triggers[event];
    }
  }, {
    key: "trigger",
    value: function trigger(event) {
      var params = arguments[1] === undefined ? null : arguments[1];

      var eventQue = this.triggers[event];
      if (!eventQue) {
        throw new Error("" + event + " has not been registered, and cannot be called");
      }

      eventQue.forEach(function (obj) {
        obj.scope[obj.method](params);
      });
    }
  }], [{
    key: "instance",
    get: function () {
      return this._instance || new Listen();
    }
  }]);

  return Listen;
})();
