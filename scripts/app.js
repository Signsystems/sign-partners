const Emitter = require('eventemitter3');
const m       = require('mithril');

const Signs      = require('./signs');
const Fullscreen = require('./fullscreen');

var events     = new Emitter,
    fullscreen = document.getElementsByClassName('fullscreen')[0],
    signs      = document.getElementsByClassName('signs')[0];

if (fullscreen) m.mount(fullscreen, m(Fullscreen, { events }));
if (signs) m.mount(signs, m(Signs, { events }));
