const p = require('puddles')

const { select } = require('../ducks/categories')

module.exports = ({ active, list }) =>
  p('nav.categories.row', list.map(name =>
    p('div.category', {
      class: { active: active === name },
      on: { click: [ select, name ] }
    }, name)
  ))

