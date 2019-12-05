require('babel-register')({
  presets: ['env', 'stage-0']
})
require('./server/server.js');
