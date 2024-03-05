import Character from './index';

/* eslint no-underscore-dangle: 0 */

export default class AttackRules extends Character {
  set rangedAttack(distance) {
    this._distance = distance;
    this._attack = this.attack;
  }

  get rangedAttack() {
    if (this.type === 'demon' || this.type === 'magican') {
      if (this._distance <= 1) {
        this._attack = this.attack;
      } else if (this._distance > 5) {
        this._attack = 0;
      } else {
        this._attack = this.attack - (this.attack * ((this._distance - 1) * (10 / 100)));
      }
    }
    return this._attack;
  }

  set stoned(activation) {
    this._stoned = activation;
  }

  get stoned() {
    if (this._stoned) {
      this._attack = Math.round(this._attack - Math.log2(this._distance) * 5);
      if (this._attack <= 0) {
        this._attack = 0;
      }
    }
    return this._attack;
  }
}
