const m = require('mithril')

const Signs = require('./signs')

const root = document.body.querySelector('.signs')

m.mount(root, Signs)
window.addEventListener('resize', m.redraw)
