import fs from 'fs';
import webpack from 'webpack';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import { version } from './package.json';

const plugins = [
  new webpack.DefinePlugin({
    __VERSION__: JSON.stringify(version),
  }),
];
export default {
  entry: `${__dirname}/src/index.js`,
  output: {
    path: `${__dirname}/build`,
    publicPath: '/build/',
    filename: process.argv.indexOf('-p') === -1 ? 'bundle.js' : 'bundle-[hash].js',
  },

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel' },
    ],
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },

  plugins: process.argv.indexOf('-p') === -1 ? plugins : [
    ...plugins,
    new CleanWebpackPlugin(['build'], {
      root: __dirname,
      verbose: false,
      dry: false,
      exclude: ['bundle.css'],
    }),
    function updateHtmlBundleWithHash() {
      this.plugin('done', (stats) => {
        const replaceInFile = (filePath, toReplace, replacement) => {
          const replacer = (match) => {
            // eslint-disable-next-line
            console.log('Replacing in %s: %s => %s', filePath, match, replacement);
            return replacement;
          };
          const str = fs.readFileSync(filePath, 'utf8');
          const out = str.replace(new RegExp(toReplace, 'g'), replacer);
          fs.writeFileSync(filePath, out);
        };

        // Build's chunkhash, found in `stats` since build lifecycle is done.
        const hash = stats.hash;

        replaceInFile(`${__dirname}/index.html`,
          /bundle-?\w*?\.js/,
          `bundle-${hash}.js`,
        );
      });
    },
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false,
      },
    }),
  ],
};
