'use strict';
const AdultTitle = require('./enum/adult-title.enum');
const validateOrThrowPersonInfo = require('./validaton/person.validation');

module.exports = class Person {

  constructor(name, gender) {
    validateOrThrowPersonInfo(name, gender);

    this.name = name;
    this.gender = gender;
  }

  get title() {
    return AdultTitle[this.gender];
  }

  getLable() {
    return `${this.title} ${this.name}`;
  }

}


