// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';



// TODO - Part 2

//Phone number: true
test('Is phone number valid phone numbers?', () =>{
  expect(isPhoneNumber('111-111-1111')).toBe(true);
  expect(isPhoneNumber('(111) 111-1111')).toBe(true);
})

//Phone number: false
test('Is phone number invalid phone numbers?', () =>{
  expect(isPhoneNumber('1525464567')).toBe(false);
  expect(isPhoneNumber('(13')).toBe(false);
})

//Email: true
test('Is email valid?', () =>{
  expect(isEmail('blehblah@ucsd.edu')).toBe(true);
  expect(isEmail('cse110email@gmail.com')).toBe(true);
})

//Email: False
test('Is email invalid?', () =>{
  expect(isEmail('blehblah@@ucsd.edu')).toBe(false);
  expect(isEmail('cse110email.com')).toBe(false);
})

//Strong Password: True
test('Is password valid?', () =>{
  expect(isStrongPassword('Ponytail300')).toBe(true);
  expect(isStrongPassword('Psyduck_is_cool')).toBe(true);
})

//Strong Password: False
test('Is password invalid?', () =>{
  expect(isStrongPassword('96_shoes')).toBe(false);
  expect(isStrongPassword('lotsofcharactersinthispassword')).toBe(false);
})
//Date: true
test('Is date valid?', () =>{
  expect(isDate('4/22/1998')).toBe(true);
  expect(isDate('12/25/2014')).toBe(true);
})

//Date: False
test('Is date invalid?', () =>{
  expect(isDate('3000/2/25')).toBe(false);
  expect(isDate('3-12-2000')).toBe(false);
})

//Hex color: true
test('Is hex color valid?', () =>{
  expect(isHexColor('#FFFFFF')).toBe(true);
  expect(isHexColor('#4287f5')).toBe(true);
})

//Hex color: False;
test('Is hex color invalid?', () =>{
  expect(isHexColor('##134')).toBe(false);
  expect(isHexColor('#BBBBBBBBBBB')).toBe(false);
})