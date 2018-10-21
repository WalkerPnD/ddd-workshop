'use strict';
const AdultTitle = require('./enum/adult-title.enum');
const ChildTitle = require('./enum/child-title.enum');
const PersonCssStyle = require('./enum/person.style');
const validateOrThrowPersonInfo = require('./validaton/person.validation');
const getSchoolByAge = require('./service/get-school-by-age.service');

module.exports = class Person {

  constructor(name, gender, age = 20, showSchool=false) {
    validateOrThrowPersonInfo(name, gender);

    this.name = name;
    this.gender = gender;
    this.age = age;
    this.showSchool = showSchool;

  }

  get title() {
    const titles = this.isAdult ? AdultTitle : ChildTitle;
    return titles[this.gender];
  }

  get isAdult() {
    return this.age >= 20;
  }

  getLable() {
    if (!this.showSchool) {
      return `${this.title} ${this.name}`;
    }

    const school = getSchoolByAge(this.age);
    return `${this.title} ${this.name} ${school}`;
  }

  getHtmlLable() {
    const style = PersonCssStyle[this.gender];
    return `<span class="${style}">${this.getLable()}</span>`;
  }

}


