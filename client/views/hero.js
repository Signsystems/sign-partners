const p = require('puddles')

module.exports = (title, hero) =>
  p('div.hero', { style: { backgroundImage: `url(${hero.src})` } }, [
    p('div.darken'),
    p('h1.title', title)
  ])
