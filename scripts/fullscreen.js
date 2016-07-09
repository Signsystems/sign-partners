const always = require('ramda/src/always')
const classnames = require('classnames')
const m = require('mithril')

exports.oninit = function({ attrs, state }) {
  state.show = attrs.fullscreen.map(always(true))
  state.show(false)
}

exports.view = function({ attrs, state }) {
  const { show } = state

  return m('.fullscreen', [
    m('.image', {
      className: classnames({ show: show() }),
      onclick: show.bind(null, false),
      style: `background-image: url(${ attrs.fullscreen().image })`
    })
  ])
}
