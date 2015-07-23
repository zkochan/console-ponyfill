'use strict';

var console = require('../');

describe('Console', function() {
  it('has all the required methods', function() {
    expect(console.log).to.be.a('function');
    expect(console.info).to.be.a('function');
    expect(console.debug).to.be.a('function');
    expect(console.error).to.be.a('function');
    expect(console.warn).to.be.a('function');
    expect(console.group).to.be.a('function');
    expect(console.groupEnd).to.be.a('function');
  });
});
