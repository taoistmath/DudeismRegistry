
// A small suite to make sure the cucumber framework works.
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  framework: 'cucumber',

  // Spec patterns are relative to this directory.
  specs: [
    '*.feature'
  ],

  baseUrl: "http://localhost:8000/",

  cucumberOpts: {
    require: 'stepDefinitions.js',
    tags: '@dev',
    format: 'pretty'
  }
};