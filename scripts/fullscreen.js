const classnames = require('classnames');
const m = require('mithril');

exports.controller = function({ events }, extras) {
  var ctrl = {
    image: m.prop(''),
    show:  m.prop(false)
  };

  events.on('fullscreen', update);

  function update(image) {
    ctrl.image(image);
    ctrl.show(true)
  }

  return ctrl;
};

exports.view = function(ctrl, args, extras) {
  return m('.fullscreen', [
    m('.image', {
      className: classnames({ show: ctrl.show() }),
      onclick: ctrl.show.bind(null, false),
      style: `background-image: url(${ctrl.image()});`
    })
  ]);
};
