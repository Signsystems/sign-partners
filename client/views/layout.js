const p = require('puddles')

const Header = require('./header')

module.exports = Child => state =>
  p('div.layout', [
    Header(state),
    p('div.content', [
      Child(state)
    ])
  ])
