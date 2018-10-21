'use strict';
const Gender = require('./gender.enum');

const AdultTitle = Object.freeze({
  [Gender.MALE]: 'Mr.',
  [Gender.FEMALE]: 'Ms.',
});

module.exports = AdultTitle;