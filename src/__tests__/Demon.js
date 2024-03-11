import Demon from '../Demon';

const character = new Demon('Jack', 'demon');

const result = {
  name: 'Jack',
  type: 'demon',
  health: 100,
  level: 1,
  _attack: 100,
  defence: 40,
};

test('Testing creating Demon', () => {
  expect(character).toEqual(result);
});
