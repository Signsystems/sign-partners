const m = require('mithril');

const Signs = require('./components/signs');

var root = document.getElementsByClassName('signs')[0];

if (root) m.mount(root, Signs);
