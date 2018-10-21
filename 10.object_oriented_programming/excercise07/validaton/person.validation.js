'use strict';
const Gender = require('../enum/gender.enum');

// (person: Person) => boolean | never
module.exports = function validateOrThrowPersonInfo(name, gender) {
  if (gender !== Gender.MALE && gender !== Gender.FEMALE) {
    throw TypeError('gender have to be Male of Female');
  }
  if  (!name) {
    throw TypeError('name cannot be empty');
  }
  if (typeof age !== 'number') {
    throw TypeError('age must be number');
  }
}
