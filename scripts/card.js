const classnames = require('classnames');
const m = require('mithril');

exports.controller = function({ card, events }) {
  var ctrl = {
    shown: m.prop(false),

    fullscreen() {
      events.emit('fullscreen', card.image);
    },

    show() {
      ctrl.shown(true);
      m.redraw();
    }
  };

  return ctrl;
};

exports.view = function(ctrl, { card, key }, extras) {
  return m('.card', {
    className: classnames({ show: ctrl.shown() }),
    config: function(elem, isInit) { isInit || setTimeout(ctrl.show, 1) },
    key,
    onclick: ctrl.fullscreen,
    style: `background-image: url(${card.image});`
  }, [
    m('.aspect'),
    m('.details', [
      m('h2.name', card.name),
      m('.description', card.description)
    ]),
    m('i.fa.zoom')
  ]);
};
