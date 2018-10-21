'use strict';
const Gender = require('./gender.enum');

const PersonCssStyle = Object.freeze({
  [Gender.MALE]: 'male',
  [Gender.FEMALE]: 'female',
});

module.exports = PersonCssStyle;