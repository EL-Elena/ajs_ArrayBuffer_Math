import Demon from '../Demon';
import Bowman from '../Bowman';

const newDemon = new Demon('Jack', 'demon');
const newDBowman = new Bowman('Jack', 'bowman');

test('Get distance', () => {
  newDBowman.distance = 2;
  expect(newDBowman.distance).toBe(2);
});

test('Get stoned', () => {
  newDBowman.stoned = true;
  expect(newDBowman.stoned).toBe(true);
});

test('Checking attack rules for Bowman', () => {
  newDBowman.attack = 100;
  newDBowman.distance = 2;
  expect(newDBowman.attack).toBe(100);
});

test('Checking attack rules for Demon with distance 6', () => {
  newDemon.attack = 100;
  newDemon.distance = 6;
  expect(newDemon.attack).toBe(0);
});

test('Checking attack rules for Demon with distance 2', () => {
  newDemon.attack = 100;
  newDemon.distance = 2;
  expect(newDemon.attack).toBe(90);
});

test('Checking attack rules for Demon with distance 2 and stoned', () => {
  newDemon.attack = 100;
  newDemon.distance = 2;
  newDemon.stoned = true;
  expect(newDemon.attack).toBe(85);
});

test('Checking attack rules for Demon with distance 5, stoned and low attack level', () => {
  newDemon.attack = 8;
  newDemon.distance = 5;
  newDemon.stoned = true;
  expect(newDemon.attack).toBe(0);
});
