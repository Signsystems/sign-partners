const Promise = require('promise');

function Emitter() {
  var _events = {};

  var emitter = {
    emit(name, args) {
      var listeners = events(name).slice(0);
      return Promise.all(over(listeners)(args));
    },

    off(name, listener) {
      var listeners = events(name),
          i = listeners.indexOf(listener);
      if (i > -1) splice(listeners, 1);
    },

    on(name, listener, ctx) {
      listener.ctx = ctx;
      events(name).push(listener);
    },

    once(name, listener, ctx) {
      function oneOff(args) {
        emitter.off(name, listener);
        return listener.call(this, args);
      }
      emitter.on(name, oneOff, ctx);
    }
  };

  function events(name) {
    return (_events[name] = _events[name] || []);
  }

  function over(fns) {
    return function(args) {
      return fns.map(function(fn) {
        return fn.ctx ? fn.call(fn.ctx, args) : fn(args);
      });
    };
  }

  return emitter;
}

module.exports = Emitter;
