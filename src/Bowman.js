import AttackRules from './AttackRules';

export default class Bowman extends AttackRules {
  constructor(name, type) {
    super(name, type);
    this.attack = 100;
    this.defence = 40;
  }
}
