import Character from '../index';

const character = new Character('Nan', 'bowman');

const result = {
  name: 'Nan',
  type: 'bowman',
  health: 100,
  level: 1,
  attack: undefined,
  defence: undefined,
};

test('Testing creating Character', () => {
  expect(character).toEqual(result);
});
