'use strict';
const Gender = require('../enum/gender.enum');

// (person: Person) => boolean | never
module.exports = function validateOrThrowPersonInfo(name, gender) {
  if (gender !== 1 && gender !== 2) {
    throw TypeError('gender have to be 1(Male) or 2(Female)');
  }
  if (!name) {
    throw TypeError('name cannot be empty');
  }
  if (typeof age !== 'number') {
    throw TypeError('age must be number');
  }
  if (typeof styling !== 'boolean') {
    throw TypeError('age must be true or false');
  }
  if (typeof showSchool !== 'boolean') {
    throw TypeError('age must be true or false');
  }
}
