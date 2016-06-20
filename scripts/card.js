const m = require('mithril');

const animate = require('./animate');

exports.controller = function({ card, events }) {
  return {
    fullscreen() {
      events.emit('fullscreen', card.image);
    }
  };
};

exports.view = function(ctrl, { card, key }, extras) {
  function fadeInOut(el, init, ctx) {
    if (init) return;
    animate.show(el);
    function exit() { return animate.hide(el); }
    card.once('exit', exit);
  }

  return m('.card', {
    config: fadeInOut,
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
