const Promise = require('promise');

exports.hide = animate('remove', 'show', 250);
exports.show = animate('add', 'show', 250);

function animate(action, klass, delay) {
  return function(elem) {
    return new Promise(function(resolve) {
      setTimeout(function(){
        elem.classList[action](klass);
        setTimeout(resolve, delay);
      }, 1);
    });
  };
}
