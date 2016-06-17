const debounce = require('lodash/debounce');
const m = require('mithril');

const Signs = require('./signs');

var signs = document.getElementsByClassName('signs')[0];

if (signs) {
  m.mount(signs, Signs);
  window.addEventListener('resize', debounce(m.redraw, 10));
}
