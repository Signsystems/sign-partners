const p = require('puddles')

const Footer = require('./footer')
const Hero   = require('./hero')
const Layout = require('./layout')

const Contact = ({ contact }) =>
  p('div.contact', [
    Hero('Contact us', contact.hero),

    p('div.other.row', [
      p('div.item', [
        p('h3.label', 'Phone'),
        p('a', { attrs: { href: 'tel:770-980-0100' } }, '770-980-0100')
      ]),
      p('div.item', [
        p('h3.label', 'Fax'),
        '770-980-0987'
      ]),
      p('div.item', [
        p('h3.label', 'Email'),
        p('a', { attrs: { href: 'mailto:mail@signpartners.com' } }, 'mail@signpartners.com')
      ])
    ]),

    p('div.address', [
      '2774 N. Cobb Parkway, Suite 109', p('br'),
      'Box #315', p('br'),
      'Kennesaw, GA 30152'
    ]),

    p('iframe.map', {
      attrs: {
        src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d271078.4217896288!2d-84.66474189693047!3d33.897618747916006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0x6c15c8495bfcf1c8!2sSign+Partners!5e0!3m2!1sen!2sus!4v1465949278936',
        width: '100%',
        height: '450',
        frameborder: '0',
        style: 'border:0',
        allowfullscreen: true
      }
    }),

    Footer()
  ])

module.exports = Layout(Contact)
