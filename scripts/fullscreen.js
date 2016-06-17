var cancel = {
  moz:    'mozCancelFullScreen',
  ms:     'msExitFullscreen',
  spec:   'cancelFullScreen',
  webkit: 'webkitCancelFullScreen'
};

var current = {
  moz:    'mozFullScreenElement',
  ms:     'msFullscreenElement',
  spec:   'fullScreenElement',
  webkit: 'webkitFullscreenElement'
};

var request = {
  moz:    'mozRequestFullScreen',
  ms:     'msRequestFullscreen',
  spec:   'requestFullscreen',
  webkit: 'webkitRequestFullscreen'
};

var prefix = (function() {
  switch (false) {
    case !document.body.requestFullscreen:       return 'spec';
    case !document.body.msRequestFullscreen:     return 'ms';
    case !document.body.mozRequestFullScreen:    return 'moz';
    case !document.body.webkitRequestFullscreen: return 'webkit';
  }
})();

module.exports = function(event) {
  if (!prefix) return;
  if (document[current[prefix]]) {
    document[cancel[prefix]]();
  } else {
    event.currentTarget[request[prefix]]();
  }
}
