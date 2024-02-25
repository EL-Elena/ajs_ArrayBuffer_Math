import Demon from '../Demon';

const newDemon = new Demon('Jack', 'demon');

test('Testing value of Attack with distance = 2', () => {
  newDemon.rangedAttack = 2;
  expect(newDemon.rangedAttack).toBe(90);
});

test('Testing value of Attack with distance = 11', () => {
  newDemon.rangedAttack = 11;
  expect(newDemon.rangedAttack).toBe(0);
});

test('Testing value of Attack with distance = 2 and active stoned', () => {
  newDemon.rangedAttack = 2;
  newDemon.stoned = 2;
  expect(newDemon.rangedAttack).toBe(85);
});

test('Testing value of Attack with distance = 10 and active stoned', () => {
  newDemon.rangedAttack = 10;
  newDemon.stoned = 10;
  expect(newDemon.rangedAttack).toBe(0);
});
