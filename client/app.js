const assoc  = require('ramda/src/assoc')
const p      = require('puddles')
const propEq = require('ramda/src/propEq')
const when   = require('ramda/src/when')

const { debug } = require('./lib/util')
const reducers  = require('./ducks')

const { resize } = require('./ducks/signs')

const reducer = p.combine(assoc('route', p.route.reducer, reducers))

const view = p.route('/home', {
  '/about':    require('./views/about'),
  '/contact':  require('./views/contact'),
  '/home':     require('./views/home'),
  '/services': require('./views/services'),
  '/signs':    require('./views/signs')
})

const root = document.body.querySelector('#root')
const { dispatch } = p.mount(root, view, reducer)

const routeChanged = propEq('type', p.route.reducer.ROUTE_CHANGED)
const scrollToTop  = _ => setTimeout(_ => window.scrollTo(0,0), 200)

dispatch.map(debug)
dispatch.map(when(routeChanged, scrollToTop))

dispatch(resize(document.body))
window.addEventListener('resize', _ => dispatch(resize(document.body)))
