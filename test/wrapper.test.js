/**
 * Wrapper Test
 */

import { expect } from 'chai';
import { generatePassword } from '../index';

const seeds = {
  name: 'Test Name'
};

const options = {
  length: 9
};

describe('generatePassword', () => {
  it('should throw error due to undefined seeds', () => {
    const fn = () => {
      return generatePassword();
    };
    expect(fn).to.throw(/Seeds must be an object/);
  });

  it('should throw error due to undefined options', () => {
    const fn = () => {
      return generatePassword(seeds);
    };
    expect(fn).to.throw(/Options must be an object/);
  });

  it('should throw error due to bad strategy type', () => {
    const fn = () => generatePassword(seeds, options, undefined);
    expect(fn).to.throw(/Strategy must be a function/);
  });
});

describe('strategy', () => {
  it('should return name', () => {
    const password = generatePassword(seeds, options, seeds => seeds.name);
    expect(password).to.be.equal(seeds.name);
  });

  it('should throw error due to bad return type', () => {
    const fn = () => generatePassword(seeds, options, () => 1);
    expect(fn).to.throw(/The strategy have to return a string type/);
  });

  it('should throw error due to bad options validation', () => {
    var fn = () => generatePassword(seeds, options, () => seeds.name + 'abc');
    expect(fn).to.throw(/The strategy's return value does not have the appropiate length/);
  });
});
