import Character from './index';

/* eslint no-underscore-dangle: 0 */

export default class AttackRules extends Character {
  get rangedAttack() {
    return this._attack;
  }

  set rangedAttack(distance) {
    this._attack = this.attack - (this.attack * ((distance - 1) * (10 / 100)));
    if (this._attack <= 0) {
      this._attack = 0;
    }
  }

  set stoned(distance) {
    this._attack = Math.round(this._attack - Math.log2(distance) * 5);
    if (this._attack <= 0) {
      this._attack = 0;
    }
  }
}
