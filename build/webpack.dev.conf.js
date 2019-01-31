const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, '../'),

  entry: {
    app: './dev/app.js'
  },

  mode: 'development',

  devServer: {
    publicPath: '/',

    port: 8088,

    hot: true,

    // 打开浏览器
    open: true,

    // 适配h5-history模式
    historyApiFallback: true,

    // 这里采用friendly输出
    quiet: true,

    inline: true
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        // 指定happybabel打包
        loader: 'babel-loader',
        // 只处理src的js文件
        exclude: /node_modules/
      },

      // css
      {
        test: /\.(css|scss|sass)$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: loader => [
                require('postcss-import')(),
                // require('autoprefixer')(),
                require('postcss-cssnext')()
              ]
            }
          },
          'sass-loader'
        ]
      },

      // font
      {
        test: /\.(woff2?|eot|ttf|oft)\??.*$/,
        loader: 'url-loader',
        options: {
          limit: 1024,
          name: 'fonts/[name].[hash].[ext]'
        }
      },

      // {
      //   test: /\.(woff2?|eot|ttf|oft)\??.*$/,
      //   loader: 'file-loader',
      //   options: {
      //     limit: 1024,
      //     name: 'fonts/[name].[hash].[ext]'
      //   }
      // },

      // {
      //   test: /\.(png|jpg|gif)$/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         name: '[path][name].[ext]'
      //       }
      //     }
      //   ]
      // },

      // img
      {
        test: /\.(gif|svg|jpe?g|png)\??.*$/,
        loader: 'url-loader',
        options: {
          limit: 1024,
          name: 'img/[name].[hash].[ext]'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.vue', '.js', '.json'],
    alias: {
      vue: 'vue/dist/vue.js',
      '@': path.resolve(__dirname, '../src')
    }
  },

  plugins: [
    new VueLoaderPlugin(),

    new webpack.DefinePlugin({
      'process.env': JSON.stringify({
        NODE_ENV: 'development'
      })
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'dev/index.html',
      inject: true
    }),
    // 热更新模块
    new webpack.HotModuleReplacementPlugin(),
    new FriendlyErrorsPlugin()

    // new webpack
  ]
};
