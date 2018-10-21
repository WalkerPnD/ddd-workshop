'use strict';
const Gender = require('./gender.enum');

const ChildTitle = Object.freeze({
  [Gender.MALE]: '(boy)',
  [Gender.FEMALE]: '(girl)',
});

module.exports = ChildTitle;