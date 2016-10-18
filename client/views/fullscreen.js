const once = require('ramda/src/once')
const p    = require('puddles')

const { faded } = require('../lib/animations')

module.exports = ({ images, route: { params: { id } } }) =>
  p('div.fullscreen', {
    on: { click: once(history.back.bind(history)) },
    style: faded
  }, [
    p('i.fa.zoom.out'),
    p('div.image', {
      style: { backgroundImage: `url(${images[id].src})` }
    })
  ])
