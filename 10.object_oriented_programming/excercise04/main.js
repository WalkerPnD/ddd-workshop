'use strict';

// gender: 1 = Male, 2 = Female
// (name, gender, age?, styling?, showSchool?) => string
function getNameWithTitle(name, gender, age=20, styling=false, showSchool=false) {
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
  if (typeof showSchool !== 'boolean') {
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

  let schoolType = '';
  if (showSchool) {
    switch (true) {
      case age >= 6 && age <= 11:
        schoolType = ' (Elementaty School)';
        break;
      case age >= 12 && age <= 14:
        schoolType = ' (Junior High School)'; 
        break;
      case age >= 15 && age <= 17:
        schoolType = ' (High School)'; 
        break;
      case age >= 18:
        schoolType = ' (High School)'; 
        break;
    }
  }

  if (styling) {
    let color = 'male';
    if (gender = 2) {
      color = 'female';
    }
    return `<span class="${color}">${title} ${name}</span>`;
  }

  return `${title} ${name}${schoolType}`;
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
console.log(getNameWithTitle('Walker', 1, 18, false, true));
console.log(getNameWithTitle('Walker', 2, 18, false, true));
console.log(getNameWithTitle('Walker', 1, 25, false, true));
console.log(getNameWithTitle('Walker', 2, 25, false, true));
console.log(getNameWithTitle('Walker', 1, 18, true, true));
console.log(getNameWithTitle('Walker', 2, 18, true, true));
console.log(getNameWithTitle('Walker', 1, 25, true, true));
console.log(getNameWithTitle('Walker', 2, 25, true, true));