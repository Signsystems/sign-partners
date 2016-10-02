const p = require('puddles')

const reducers = require('./ducks')
const Signs    = require('./views/signs')

const reducer = p.combine(reducers)

const root = document.body.querySelector('.signs')
p.mount(root, Signs, reducer)
