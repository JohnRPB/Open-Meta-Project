const path = require('path');

module.exports = function override(config, env) {
  config.resolve = {
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
      containers: path.resolve(__dirname, 'src/containers/'),
      lib: path.resolve(__dirname, 'src/lib/')
    }
  }
  return config
}
