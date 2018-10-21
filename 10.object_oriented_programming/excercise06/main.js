'use strict';
const Gender = require('./enum/gender.enum');
const Person = require('./person.model');

const man = new Person('Walker', Gender.MALE);
const woman = new Person('Walker', Gender.FEMALE);
console.log(man.getLable());
console.log(woman.getLable());
