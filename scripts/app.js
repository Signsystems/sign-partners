const assoc = require('ramda/src/assoc')
const p     = require('puddles')

const { log }  = require('./lib/util')
const reducers = require('./ducks')

const { resize } = require('./ducks/signs')

const reducer = p.combine(assoc('route', p.route.reducer, reducers))

const view = p.route('/home', {
  '/about':  require('./views/about'),
  '/home':   require('./views/home'),
  '/signs':  require('./views/signs')
})

const root = document.body.querySelector('#root')
const { dispatch } = p.mount(root, view, reducer)

dispatch.map(log)
dispatch(resize(document.body))
window.addEventListener('resize', _ => dispatch(resize(document.body)))
