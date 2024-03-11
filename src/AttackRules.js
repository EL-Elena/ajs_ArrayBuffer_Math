import Character from './index';

/* eslint no-underscore-dangle: 0 */

export default class AttackRules extends Character {
  set distance(value) {
    this._distance = value;
  }

  get distance() {
    return this._distance;
  }

  set stoned(value) {
    this._stoned = value;
  }

  get stoned() {
    return this._stoned;
  }

  set attack(value) {
    this._attack = value;
  }

  get attack() {
    if (this.type === 'demon' || this.type === 'magican') {
      if (this._distance > 5) {
        return 0;
      }

      if (this._stoned) {
        const rangedAttack = this._attack - (this._attack * ((this._distance - 1) * (10 / 100)));
        const stonedAttack = Math.round(rangedAttack - Math.log2(this._distance) * 5);
        if (stonedAttack <= 0) {
          return 0;
        }
        return stonedAttack;
      }
      return this._attack - (this._attack * ((this._distance - 1) * (10 / 100)));
    }
    return this._attack;
  }
}
