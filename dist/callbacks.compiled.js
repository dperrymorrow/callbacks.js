"use strict";

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var Callbacks = (function () {
  function Callbacks() {
    _classCallCheck(this, Callbacks);

    this.triggers = [];
    Callbacks.instance = this;
  }

  _createClass(Callbacks, [{
    key: "addCallback",
    value: function addCallback(eventName, instance, functionName) {}
  }, {
    key: "removeCallback",
    value: function removeCallback(eventName, instance, functionName) {}
  }, {
    key: "fireCallback",
    value: function fireCallback(eventName, params) {}
  }], [{
    key: "getInstance",
    value: function getInstance() {
      return Callbacks.instance || new Callbacks();
    }
  }]);

  return Callbacks;
})();
