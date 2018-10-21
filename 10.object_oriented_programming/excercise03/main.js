'use strict';

// gender: 1 = Male, 2 = Female
// (name, gender, age?, styling?) => string
function getNameWithTitle(name, gender, age = 20, styling=false) {
  // type validation
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

  let title = '';
  switch (true) {
    case age < 20 && gender === 1:
      title = '(boy)'
      break;
    case age >= 20 && gender === 1:
      title = 'Mr.'
      break;
    case age < 20 && gender === 2:
      title = '(girl)'
      break;
    case age >= 20 && gender === 2:
      title = 'Ms.'
      break;
  }

  if (styling) {
    let color = 'male';
    if (gender = 2) {
      color = 'female';
    }
    return `<span class="${color}">${title} ${name}</span>`;
  }

  return `${title} ${name}`;
}

console.log(getNameWithTitle('Walker', 1));
console.log(getNameWithTitle('Walker', 2));
console.log(getNameWithTitle('Walker', 1, 18));
console.log(getNameWithTitle('Walker', 2, 18));
console.log(getNameWithTitle('Walker', 1, 25));
console.log(getNameWithTitle('Walker', 2, 25));
console.log(getNameWithTitle('Walker', 1, 18, true));
console.log(getNameWithTitle('Walker', 2, 18, true));
console.log(getNameWithTitle('Walker', 1, 25, true));
console.log(getNameWithTitle('Walker', 2, 25, true));