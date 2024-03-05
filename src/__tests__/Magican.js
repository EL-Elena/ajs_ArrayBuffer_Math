import Magican from '../Magican';

const character = new Magican('Lo', 'magican');

const result = {
  name: 'Lo',
  type: 'magican',
  health: 100,
  level: 1,
  attack: 8,
  defence: 40,
};

test('Testing creating Magican', () => {
  expect(character).toEqual(result);
});
