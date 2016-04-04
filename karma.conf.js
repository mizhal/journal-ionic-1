// Karma configuration
// Generated on Sun Apr 03 2016 16:24:49 GMT+0200 (Hora de verano romance)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
        // libs
        "www/lib/jquery/dist/jquery.js",
        "www/lib/ionic/js/ionic.bundle.js",
        "www/lib/ionic/js/angular-resource.js",
        "www/lib/angular-uuid-service/angular-uuid-service.js",
        "www/lib/ng-cordova.js",
        "www/lib/jsdiff/diff.js",
        "www/cordova.js",

        // apps
        "www/js/app.js",
        "www/js/controllers.js",
        "www/js/routes.js",
        "www/js/services.js",
        "www/js/filters.js",
        "www/js/directives.js",
        
        // tests
        "spec/QuestService.spec.js"
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


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
    browsers: ['Chrome', 'Firefox'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
