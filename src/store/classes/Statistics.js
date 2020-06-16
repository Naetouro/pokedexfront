export default class Statistics extends Object {
  _pv;
  _attack;
  _defense;
  _specialAttack;
  _specialDefense;
  _speed;

  constructor(statistics) {
    super();
    this._pv = statistics.pv;
    this._attack = statistics.attack;
    this._defense = statistics.defense;
    this._specialAttack = statistics.specialAttack;
    this._specialDefense = statistics.specialDefense;
    this._speed = statistics.speed;
  }

  get pv() {
    return this._pv;
  }

  set pv(value) {
    this._pv = value;
  }

  get attack() {
    return this._attack;
  }

  set attack(value) {
    this._attack = value;
  }

  get defense() {
    return this._defense;
  }

  set defense(value) {
    this._defense = value;
  }

  get specialAttack() {
    return this._specialAttack;
  }

  set specialAttack(value) {
    this._specialAttack = value;
  }

  get specialDefense() {
    return this._specialDefense;
  }

  set specialDefense(value) {
    this._specialDefense = value;
  }

  get speed() {
    return this._speed;
  }

  set speed(value) {
    this._speed = value;
  }
}
