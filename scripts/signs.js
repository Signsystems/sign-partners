const classnames = require('classnames');
const Emitter    = require('eventemitter3');
const filter     = require('lodash/filter');
const invokeMap  = require('lodash/invokeMap');
const m          = require('mithril');
const Promise    = require('promise');
const reject     = require('lodash/filter');

const Card       = require('./card');
const Model      = require('./model');
const Fullscreen = require('./fullscreen');
const { signs }  = require('../data');

var sizes = [
  {
    width: 769,
    size: 12
  },
  {
    width: 481,
    size: 8,
  },
  {
    width: 0,
    size: 6
  }
];

var cards = signs.cards.map(Model);

exports.controller = function(args, extras) {
  var current = 'all';

  var ctrl = {
    events: new Emitter,
    pages:  1,

    cards() {
      var category = ctrl.category();
      return category === 'all' ? cards : filter(cards, { category });
    },

    category(name) {
      if (!arguments.length) return current;
      current = name;
      if (current === 'all') return;
      m.startComputation();
      var exiting = reject(cards, { category: current });
      Promise.all(invokeMap(exiting, 'emit', 'exit')).then(m.endComputation);
    },

    more() {
      ctrl.pages++;
    }
  };

  return ctrl;
};

exports.view = function(ctrl, args, extras) {
  var { events } = ctrl,
      total = ctrl.pages * pageSize();

  return [
    m('nav.categories.row', [
      signs.categories.map(name =>
        m('.category', {
          className: classnames({ active: ctrl.category() === name }),
          onclick: ctrl.category.bind(null, name)
        }, name)
      )
    ]),

    m('.cards.row', ctrl.cards().slice(0, total).map((card, key) =>
      m(Card, { card, events, key })
    )),

    total < ctrl.cards().length
      ? m('button.more', { onclick: ctrl.more }, 'Show more')
      : null,

    m(Fullscreen, { events })
  ];
};

function pageSize() {
  var width = document.body.clientWidth;
  return sizes.find(config => config.width <= width).size;
}
