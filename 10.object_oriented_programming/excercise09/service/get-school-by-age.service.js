'use strict';

module.exports = function getSchoolByAge(age) {
  switch (true) {
    case age >= 6 && age <= 11:
      return ' (Elementaty School)';
    case age >= 12 && age <= 14:
      return ' (Junior High School)'; 
    case age >= 15 && age <= 17:
      return ' (High School)'; 
    case age >= 18:
      return ' (High School)'; 
    default:
      return '';
  }
}
