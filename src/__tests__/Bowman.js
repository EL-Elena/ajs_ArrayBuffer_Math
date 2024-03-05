import Bowman from '../Bowman';

const character = new Bowman('Jack', 'bowman');

const result = {
  name: 'Jack',
  type: 'bowman',
  health: 100,
  level: 1,
  attack: 100,
  defence: 40,
};

test('Testing creating Bowman', () => {
  expect(character).toEqual(result);
});
