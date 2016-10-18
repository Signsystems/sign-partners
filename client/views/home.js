const p       = require('puddles')
const prepend = require('ramda/src/prepend')

const Card    = require('./card')
const { get } = require('../lib/util')
const Footer  = require('./footer')
const Layout  = require('./layout')

const Pane = (pane, i) =>
  p(`div.pane.pane-${i}`, {
    style: { backgroundImage: `url(${pane.src})` }
  })

const Home = ({ home, images }) =>
  p('div.home', [
    p('div.carousel', prepend(
      p('div.aspect'),
      home.carousel.map(get(images)).map(Pane)
    )),

    p('div.copy', [
      p('p', "We've been providing custom sign solutions to businesses and organizations in the Greater Atlanta area since 2001. Our experienced and talented staff creates some of the most beautiful, high-impact custom signs in the city. Each sign helps local business bring in more clients and communicate more effectively with employees and customers."),

      p('div.cards.row', home.cards.map(get(images)).map(Card('/home'))),

      p('div.row', [
        p('a.more', { attrs: { href: p.href('/signs') } }, 'See more signs')
      ])
    ]),

    Footer()
  ])

module.exports = Layout(Home)
