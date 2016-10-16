/**
 * Wrapper
 */

var assert = require('assert');

exports.generate = function(seeds, options, strategy) {
  assert(typeof seeds === 'object', 'Seeds must be an object');
  assert(typeof options === 'object', 'Options must be an object');
  assert(typeof strategy === 'function', 'Strategy must be a function');

  var result = strategy(seeds, options);

  assert(typeof result === 'string',
         'The strategy have to return a string type');
  assert(result.length === options.length,
         'The strategy\'s return value does not have the appropiate length');

  return result;
};
