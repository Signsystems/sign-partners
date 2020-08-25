const p = require('puddles')

const Brand = require('./brand')

const Link = (path, name) =>
  p('li.nav-item', [
    p('a', { attrs: { href: p.href(path) } }, name)
  ])

module.exports = () =>
  p('nav.footer.row', [
    p('div.column', [
      p('h3.label', 'Sign Partners, Inc.'),
      p('div.contact-info', [
        '4225 JVL Industrial Park Dr',
        p('br'),
        'Suite 204',
        p('br'),
        'Marietta, GA  30066',
        p('br'),

        p('a', { attrs: { href: 'tel:770-980-0100' } }, '770-980-0100'), ' - phone',
        p('br'),
        p('a', { attrs: { href: 'mailto:mail@signpartners.com' } }, 'mail@signpartners.com')
      ])
    ]),

    p('div.column.stretch', [
      p('h3.label', 'Navigation'),
      p('ul.nav', [
        Link('/home',     'Home'),
        Link('/signs',    'Signs'),
        Link('/services', 'Services'),
        Link('/about',    'About'),
        Link('/contact',  'Contact')
      ])
    ]),

    p('div.column', [
      Brand()
    ])
  ])
