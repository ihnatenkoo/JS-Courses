const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

function generateHtmlPlugins() {
  return new HtmlWebpackPlugin({
    filename: 'index.html',
    template: path.resolve(__dirname, 'src/index.html'),
    inject: false,
  });
}

const htmlPlugins = generateHtmlPlugins();

const config = {
  entry: ['./src/scripts/main.js', './src/styles/main.scss'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'scripts/main.js',
  },
  devtool: 'source-map',
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            'default',
            {
              discardComments: { removeAll: true },
            },
          ],
        },
      }),
      new TerserPlugin({
        extractComments: true,
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.(sass|scss)$/,
        include: path.resolve(__dirname, 'src/styles'),
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {},
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              url: false,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.html$/,
        include: path.resolve(__dirname, 'src/index.html'),
        use: ['raw-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/main.bundle.css',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'src/images',
          to: 'images',
        },
      ],
    }),
  ].concat(htmlPlugins),
};

module.exports = (env, argv) => {
  if (argv.mode === 'production') {
    config.plugins.push(new CleanWebpackPlugin());
  }

  return config;
};
