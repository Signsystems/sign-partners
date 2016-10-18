const compose = require('ramda/src/compose')
const p       = require('puddles')
const prop    = require('ramda/src/prop')
const once    = require('ramda/src/once')
const split   = require('ramda/src/split')

const { faded } = require('../lib/animations')

const parse = compose(prop(0), split('-'))

module.exports = ({ images, route: { params: { id } } }) =>
  p('div.fullscreen', {
    on: { click: once(history.back.bind(history)) },
    style: faded
  }, [
    p('i.fa.zoom.out'),
    p('div.image', {
      style: { backgroundImage: `url(${images[parse(id)].src})` }
    })
  ])
