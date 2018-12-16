"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getDelayedCallback;

function getDelayedCallback(delay, cb) {
  if (!cb) {
    return function (callback) {
      return getDelayedCallback(delay, callback);
    };
  } else {
    var start = new Date();

    var delayedCallback = function delayedCallback() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var self = this;
      var end = new Date();
      var diff = end - start;

      if (diff < delay) {
        setTimeout(function () {
          return cb.call.apply(cb, [self].concat(args));
        }, delay - diff);
      } else {
        cb.call.apply(cb, [self].concat(args));
      }
    };

    delayedCallback.__delayStart = start;
    delayedCallback.__delayValue = delay;
    return delayedCallback;
  }
}
//# sourceMappingURL=index.js.map