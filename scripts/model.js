const assign  = require('lodash/assign');

const Emitter = require('./emitter');

function Model(attrs) {
  var model = assign({}, attrs);

  assign(model, Emitter());

  return model;
}

module.exports = Model;
