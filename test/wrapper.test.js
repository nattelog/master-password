/**
 * Wrapper Test
 */

var expect = require('chai').expect;
var generate = require('../index').wrapper.generate;

var seeds = {
  name: 'Test Name'
};

var options = {
  length: 9
};

describe('bad arguments to generate()', function() {
  it('should throw error due to undefined seeds', function() {
    var fn = function() {
      return generate();
    };
    expect(fn).to.throw(/Seeds must be an object/);
  });

  it('should throw error due to undefined options', function() {
    var fn = function() {
      return generate(seeds);
    };
    expect(fn).to.throw(/Options must be an object/);
  });

  it('should throw error due to bad strategy type', function() {
    var fn = function() {
      return generate(seeds, options, undefined);
    };
    expect(fn).to.throw(/Strategy must be a function/);
  });
});

describe('strategy', function() {
  it('should return name', function() {
    var password = generate(seeds, options, function(seeds) {
      return seeds.name;
    });
    expect(password).to.be.equal(seeds.name);
  });

  it('should throw error due to bad return type', function() {
    var fn = function() {
      return generate(seeds, options, function() {
        return 1;
      });
    };
    expect(fn).to.throw(/The strategy have to return a string type/);
  });

  it('should throw error due to bad options validation', function() {
    var fn = function() {
      return generate(seeds, options, function() {
        return seeds.name + 'abc';
      });
    };
    expect(fn).to.throw(/The strategy's return value does not have the appropiate length/);
  });
});
