const p = require('puddles')

const Brand = require('./brand')

const Link = (route, path, name) =>
  p('a.page', {
    attrs: { href: p.href(path) },
    class: { active: route.path === path }
  }, name)

module.exports = ({ route }) =>
  p('nav.header', [
    Brand(),
    Link(route, '/home',     'Home'),
    Link(route, '/about',    'About'),
    Link(route, '/signs',    'Signs'),
    Link(route, '/services', 'Services'),
    Link(route, '/contact',  'Contact')
  ])
