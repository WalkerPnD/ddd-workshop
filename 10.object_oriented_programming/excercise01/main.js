'use strict';

// gender: 1 = Male, 2 = Female
// (name, gender) => string
function getNameWithTitle(name, gender) {
  // type validation
  if (gender !== 1 && gender !== 2) {
    throw TypeError('gender have to be 1(Male) or 2(Female)');
  }
  if (!name) {
    throw TypeError('name cannot be empty');
  }

  let title = 'Mr.';
  if (gender === 2) {
    title = 'Ms.';
  }

  return `${title} ${name}`;
}

console.log(getNameWithTitle('Walker', 1));
console.log(getNameWithTitle('Walker', 2));