const compose = require('ramda/src/compose')
const concat  = require('ramda/src/concat')
const p       = require('puddles')
const prop    = require('ramda/src/prop')
const split   = require('ramda/src/split')

const { faded } = require('../lib/animations')

const base = compose(concat('/'), prop(1), split('/'))

const parse = compose(prop(0), split('-'))

module.exports = ({ images, route: { params, path } }) =>
  p('a.fullscreen', {
    attrs: { href: p.href(base(path)) },
    style: faded
  }, [
    p('i.fa.zoom.out'),
    p('div.image', {
      style: { backgroundImage: `url(${images[parse(params.id)].src})` }
    })
  ])
