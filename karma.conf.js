// Karma configuration
// Generated on Thu Aug 03 2017 16:41:10 GMT+0800 (CST)
// const babel = require('rollup-plugin-babel');
const path = require('path');
module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      'src/**.js',
      '__test__/*.js'
    ],

    // list of files to exclude
    exclude: [
      'node_modules/*'
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/*.js': ['webpack', 'coverage'],
      '__test__/*.js': ['webpack']
    },

    webpack: {
      module: {
        rules: [
          {
            test: /\.css$/,
            use: [
              {loader: 'style-loader', options: {insertAt: 'bottom'}},
              {loader: 'css-loader', options: {importLoaders: 1}}
            ]
          },
          {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            use: { loader: 'url-loader', options: { limit: 100000 } }
          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader'
            }
          }
        ],
        strictThisContextOnImports: true
      },
      resolve: {
        mainFields: ['module', 'browser', 'main'],
        modules: [path.resolve('./src'), 'node_modules']
      },
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],

    coverageReporter: {
      type: 'html',
      dir: 'coverage/',
      subdir (browser) {
        return browser.toLowerCase().split(/[ /-]/)[0];
      }
    },

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    client: {
      captureConsole: true
    }
  });
};
