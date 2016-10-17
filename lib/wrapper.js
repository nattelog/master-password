/**
 * wrapper.js
 *
 * Functions related to password generation and strategies.
 */

import assert from 'assert';

/**
 * Generates a password using the passed strategy.
 *
 * @param {object} seeds An object with seeds used to create the password.
 * @param {object} options An object with options and validations to pass to the
 *   strategy.
 * @param {function} strategy The strategy that will create the password.
 * @return {string} The created password.
 */
export function generatePassword(seeds, options, strategy) {
  assert(typeof seeds === 'object', 'Seeds must be an object');
  assert(typeof options === 'object', 'Options must be an object');
  assert(typeof strategy === 'function', 'Strategy must be a function');

  const result = strategy(seeds, options);

  assert(typeof result === 'string',
         'The strategy have to return a string type');
  assert(result.length === options.length,
         'The strategy\'s return value does not have the appropiate length');

  return result;
}

/**
 * Returns a strategy from the .mspw folder based on the values in seeds.
 *
 * @param {object} seeds An object with seeds used to pick a strategy.
 * @return {function} A strategy from the .mspw folder.
 */
export function getStrategy(seeds) {
  return undefined;
}

/**
 * Runs tests from the test folder on a strategy. All output is piped from the
 * child process.
 *
 * @param {function} strategy The strategy to test.
 * @return {bool} True if tests passed, false otherwise.
 */
export function testStrategy(strategy) {
  return false;
}
