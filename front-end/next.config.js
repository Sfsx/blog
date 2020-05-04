const path = require('path');

module.exports = {
  webpack: (config, options) => {
    config.resolve.alias['components'] = path.join(__dirname, 'src/components');
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    // config.module.rules.push({ test: /\.scss$/, loader: 'typings-for-css-modules?modules&sass' })
    return config;
  }
}