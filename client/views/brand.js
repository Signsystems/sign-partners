const fs = require('fs')
const p  = require('puddles')

const logo = fs.readFileSync(require.resolve('./logo.svg'), 'utf8')

module.exports = _ =>
  p('h1.brand', [
    p('a.row', { attrs: { href: p.href('/home') } }, [
      p('div', { props: { innerHTML: logo } }),
      p('div.column', [
        p('div.sign', 'Sign'),
        p('div.partners', 'Partners')
      ])
    ])
  ])
