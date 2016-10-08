const p = require('puddles')

const { zoom } = require('../ducks/fullscreen')

module.exports = ({ fullscreen: { image, show} }) =>
  p('div.fullscreen', {
    class: { show: show } ,
    on: { click: [ zoom, false ] }
  }, [
    p('i.fa.zoom.out'),
    p('div.image', {
      style: { backgroundImage: `url(${image})` }
    })
  ])
