'use strict';
const Gender = require('./enum/gender.enum');
const Person = require('./person.model');

const man = new Person('Walker', Gender.MALE, 18);
const woman = new Person('Walker', Gender.FEMALE, 18);

console.log(man.getLable());
console.log(woman.getLable());

man.age = 25;
woman.age = 25;
console.log(man.getLable());
console.log(woman.getLable());