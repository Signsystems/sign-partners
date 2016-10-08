const p = require('puddles')
const prepend = require('ramda/src/prepend')

const Card   = require('./card')
const Footer = require('./footer')
const Layout = require('./layout')
const { paged } = require('../lib/animations')

const Pane = (src, i) =>
  p(`div.pane.pane-${i}`, {
    style: { backgroundImage: `url(${src})` }
  })

const Home = ({ home }) =>
  p('div.home.page', { style: paged }, [
    p('div.carousel', prepend(
      p('div.aspect'),
      home.carousel.map(Pane)
    )),

    p('div.copy', [
      p('p', "We've been providing custom sign solutions to businesses and organizations in the Greater Atlanta area since 2001. Our experienced and talented staff creates some of the most beautiful, high-impact custom signs in the city. Each sign helps local business bring in more clients and communicate more effectively with employees and customers."),

      p('div.cards.row', home.cards.map(Card))
    ]),

    Footer()
  ])

module.exports = Layout(Home)
