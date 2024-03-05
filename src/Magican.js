import AttackRules from './AttackRules';

export default class Magican extends AttackRules {
  constructor(name, type) {
    super(name, type);
    this.attack = 8;
    this.defence = 40;
  }
}
