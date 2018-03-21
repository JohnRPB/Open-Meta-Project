const path = require('path');

module.exports = {
  webpack: function(config, env) {
    config.resolve = {
      alias: {
        components: path.resolve(__dirname, 'src/components/'),
        containers: path.resolve(__dirname, 'src/containers/'),
        lib: path.resolve(__dirname, 'src/lib/'),
        reducers: path.resolve(__dirname, 'src/reducers/'),
        actions: path.resolve(__dirname, 'src/actions/'),
        root: path.resolve(__dirname, 'src/')
      },
    };
    return config;
  },
  jest: function(config) {
    // Re-specify aliases with regex substitutions
    config.moduleNameMapper = {
      "^lib(.*)$":  path.resolve(__dirname, 'src/lib/') + "$1",
      "^actions(.*)$":path.resolve(__dirname, 'src/actions/') + "$1",
      "^reducers(.*)$": path.resolve(__dirname, 'src/reducers/') + "$1",
      // Below path fixers cause Jest to stall
      // including --watchAll fixes problem, suggests non-existent file somewhere?
      "^components(.*)$": path.resolve(__dirname, 'src/components/') + "$1",
      "^containers(.*)$": path.resolve(__dirname, 'src/containers/') + "$1",
      "^root(.*)$": path.resolve(__dirname, 'src/') + "$1"
    }
    return config;
  },
};
