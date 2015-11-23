/*global describe, it*/
// 'use strict';

const expect = require('expect.js');

const Profile = require('./../src/js/UserProfileService');

describe('Profile Init', function() {
  it('should initialize', function() {
    const prof = new Profile();
    expect(prof).to.not.be(null);
  });

});
