const fs = require('fs')
const p  = require('puddles')

const logo = fs.readFileSync(require.resolve('../../templates/shared/logo.svg'), 'utf8')

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
        p('li.nav-item', [
          p('a', { attrs: { href: '/' } }, 'Home')
        ]),
        p('li.nav-item', [
          p('a', { attrs: { href: '/about.html' } }, 'About')
        ]),
        p('li.nav-item', [
          p('a', { attrs: { href: '/signs.html' } }, 'Signs')
        ]),
        p('li.nav-item', [
          p('a', { attrs: { href: '/services.html' } }, 'Services')
        ]),
        p('li.nav-item', [
          p('a', { attrs: { href: '/contact.html' } }, 'Contact')
        ])
      ])
    ]),

    p('div.column', [
      p('h1.brand', [
        p('a.row', { attrs: { href: '/' } }, [
          p('div', { props: { innerHTML: logo } }),
          p('div.column', [
            p('div.sign', 'Sign'),
            p('div.partners', 'Partners')
          ])
        ])
      ])
    ])
  ])
