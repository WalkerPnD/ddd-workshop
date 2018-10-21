'use strict';
const AdultTitle = require('./enum/adult-title.enum');
const ChildTitle = require('./enum/child-title.enum');
const validateOrThrowPersonInfo = require('./validaton/person.validation');

module.exports = class Person {

  constructor(name, gender, age = 20) {
    validateOrThrowPersonInfo(name, gender);

    this.name = name;
    this.gender = gender;
    this.age = age;

  }

  get title() {
    const titles = this.isAdult ? AdultTitle : ChildTitle;
    return titles[this.gender];
  }

  get isAdult() {
    return this.age >= 20;
  }

  getLable() {
    return `${this.title} ${this.name}`;
  }

}


