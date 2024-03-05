import Demon from '../Demon';
import Magican from '../Magican';
import Bowman from '../Bowman';

const newDemon = new Demon('Jack', 'demon');
const newMagican = new Magican('Lo', 'magican');
const newDBowman = new Bowman('Jack', 'bowman');

test('Testing value of Attack with distance = 0', () => {
  newDemon.rangedAttack = 0;
  expect(newDemon.rangedAttack).toBe(100);
});

test('Testing value of Attack with distance = 2', () => {
  newDemon.rangedAttack = 2;
  expect(newDemon.rangedAttack).toBe(90);
});

test('Testing value of Attack with distance = 10', () => {
  newDemon.rangedAttack = 10;
  expect(newDemon.rangedAttack).toBe(0);
});

test('Testing value of Attack with distance = 2 and active stoned', () => {
  newDemon.rangedAttack = 2;
  newDemon.rangedAttack;
  newDemon.stoned = true;
  expect(newDemon.stoned).toBe(85);
});

test('Testing value of Attack with distance = 2 without stoned', () => {
  newDemon.rangedAttack = 2;
  newDemon.rangedAttack;
  newDemon.stoned = false;
  expect(newDemon.stoned).toBe(90);
});

test('Testing value of Attack with distance = 5, active stoned and low attack level', () => {
  newMagican.rangedAttack = 5;
  newMagican.stoned = true;
  expect(newMagican.stoned).toBe(0);
});

test('Testing value of Attack for another character', () => {
  newDBowman.rangedAttack = 2;
  expect(newDBowman.rangedAttack).toBe(100);
});
