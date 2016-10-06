const p = require('puddles')

module.exports = (title, image) =>
  p('div.hero', { style: { backgroundImage: `url(${image})` } }, [
    p('div.darken'),
    p('h1.title', title)
  ])
