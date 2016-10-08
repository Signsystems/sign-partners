const p = require('puddles')

const Brand = require('./brand')

const Link = (path, name) =>
  p('li.nav-item', [
    p('a', { attrs: { href: p.href(path) } }, name)
  ])

module.exports = _ =>
  p('nav.footer.row', [
    p('div.column', [
      p('h3.label', 'Sign Partners, Inc.'),
      p('div.contact-info', [
        '2774 N. Cobb Parkway, Suite 109',
        p('br'),
        'Box #315',
        p('br'),
        'Kennesaw, GA 30152',
        p('br'),

        p('a', { attrs: { href: 'tel:770-980-0100' } }, '770-980-0100'), ' - phone',
        p('br'),
        '770-090-0987 - fax',
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
