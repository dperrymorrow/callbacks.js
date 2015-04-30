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
    key: "add",
    value: function add(eventName, instance, functionName) {
      this.triggers[eventName];
    }
  }, {
    key: "remove",
    value: function remove(eventName, instance, functionName) {}
  }, {
    key: "trigger",
    value: function trigger(eventName) {
      var params = arguments[1] === undefined ? null : arguments[1];
    }
  }, {
    key: "registerSignal",
    value: function registerSignal(signalName) {}
  }], [{
    key: "instance",
    get: function () {
      return Listen._instance || new Listen();
    }
  }]);

  return Listen;
})();
