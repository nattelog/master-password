/**
 * file.js
 *
 * Functions related to the .mspw folder.
 */

/**
 * Creates a .mspw folder in the user home folder. The folder should have the
 * following structure:
 *
 *   /home/user/.mspw
 *   ├── package.json
 *   └── strategies
 *       ├── my-strategy-1.js
 *       └── my-strategy-2.js
 *
 * The folder is an npm-folder, thereby making it possible to use npm packages in
 * the custom strategies.
 */
export function initFileStructure() {}

/**
 * Creates a new strategy in .mspw/strategies.
 *
 * @param {string} name The name of the file.
 * @return {string} The path to the file.
 */
export function createStrategy(name) {
  return undefined;
}

/**
 * Adds the strategy to the list of strategies.
 *
 * @param {string} name The name of the strategy file.
 */
export function addStrategy(name) {}

/**
 * Removes the strategy from the list of strategies.
 *
 * @param {string} name The name of the strategy file.
 */
export function removeStrategy(name) {}
