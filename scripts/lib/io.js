const always  = require('ramda/src/always')
const compose = require('ramda/src/compose')

const IO = run => {
  const chain = fn => IO(_ => fn(run()).run())
  const map   = fn => IO(compose(fn, run))
  return { chain, map, run }
}

IO.of = x => IO(always(x))

module.exports = IO
