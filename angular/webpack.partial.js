const WebpackAssetsManifest = require('webpack-assets-manifest');

module.exports = {
  plugins: [
    new WebpackAssetsManifest({
      // Options go here
      writeToDisk: true,
      sortManifest: false,
      publicPath: true, // prepend paths to generated assets in manifest.json
      done(manifest, stats) {
        console.log(`The manifest has been written to ${manifest.getOutputPath()}`);
        console.log(`${manifest}`);
      }
    }),
  ]
};
