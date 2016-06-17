const m = require('mithril');

exports.controller = function({ card, events }) {
  return {
    fullscreen() {
      events.emit('fullscreen', card.image);
    }
  }
};

exports.view = function(ctrl, { card }, extras) {
  return m('.card', {
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
