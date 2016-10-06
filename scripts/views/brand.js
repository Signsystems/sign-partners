const fs = require('fs')
const p  = require('puddles')

const logo = fs.readFileSync(require.resolve('../../templates/shared/logo.svg'), 'utf8')

module.exports = state =>
  p('h1.brand', [
    p('a.row', { attrs: { href: '/' } }, [
      p('div', { props: { innerHTML: logo } }),
      p('div.column', [
        p('div.sign', 'Sign'),
        p('div.partners', 'Partners')
      ])
    ])
  ])
