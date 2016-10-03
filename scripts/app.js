const p = require('puddles')

const reducer = require('./ducks/signs')
const view    = require('./views/signs')

const root = document.body.querySelector('.signs')
const { dispatch } = p.mount(root, view, reducer)

dispatch.map(console.log.bind(console))
