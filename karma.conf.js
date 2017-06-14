module.exports = function(config) {
  config.set({
    basePath: './',
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      // libraries


      // javascript application files
      'src/Foo.js',

      // javascript test files
      'test/verify.setup.tests.js'

    ],

    autoWatch: true,
    browsers: ['Chrome']
  });
};
