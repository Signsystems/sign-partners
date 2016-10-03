const p = require('puddles')

const IO      = require('./lib/io')
const { log } = require('./lib/util')
const reducer = require('./ducks/signs')
const view    = require('./views/signs')

const { resize } = reducer,
      width = IO(_ => document.body.clientWidth)

const root = document.body.querySelector('.signs')
const { dispatch } = p.mount(root, view, reducer)

dispatch.map(log)
dispatch(resize(width))
window.addEventListener('resize', _ => dispatch(resize(width)))
