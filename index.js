// Support coffee script and source maps for stack traces
// NOTE: don't handle uncaught exceptions in order not to interfere with mocha.
require('coffee-script/register');

// enable chai should as default for all tests
module.exports = require('./lib/store');
