const p = require('puddles')

const { log } = require('./lib/util')
const reducer = require('./ducks/signs')
const view    = require('./views/signs')

const { resize } = reducer

const root = document.body.querySelector('.signs')
const { dispatch } = p.mount(root, view, reducer)

dispatch.map(log)
dispatch(resize(document.body))
window.addEventListener('resize', _ => dispatch(resize(document.body)))
