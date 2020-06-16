export default class Pokemon extends Object {
  _id;
  _name;
  _image;
  _type1;
  _type2;
  _height;
  _weight;
  _previousEvolutions;
  _nextEvolutions;
  _capacities;
  _talents;
  _weaknesses;
  _statistics;
  _caught;
  _levelEvolution;
  _conditionEvolution;

  constructor(pokemon) {
    super();
    this._id = pokemon.id;
    this._name = pokemon.name;
    this._image = pokemon.image;
    this._type1 = pokemon.type1;
    this._type2 = pokemon.type2;
    this._height = pokemon.height;
    this._weight = pokemon.weight;
    this._capacities = pokemon.capacities;
    this._talents = pokemon.talents;
    this._previousEvolutions = pokemon.previousEvolutions;
    this._nextEvolutions = pokemon.nextEvolutions;
    this._weaknesses = pokemon.weaknesses;
    this._statistics = pokemon.statistics;
    this._caught = pokemon.caught;
    this._levelEvolution = pokemon.levelEvolution;
    this._conditionEvolution = pokemon.conditionEvolution;
  }

  get type1() {
    return this._type1;
  }

  set type1(value) {
    this._type1 = value;
  }

  get type2() {
    return this._type2;
  }

  set type2(value) {
    this._type2 = value;
  }

  get height() {
    return this._height;
  }

  set height(value) {
    this._height = value;
  }

  get weight() {
    return this._weight;
  }

  set weight(value) {
    this._weight = value;
  }

  get previousEvolutions() {
    return this._previousEvolutions;
  }

  set previousEvolutions(value) {
    this._previousEvolutions = value;
  }

  get nextEvolutions() {
    return this._nextEvolutions;
  }

  set nextEvolutions(value) {
    this._nextEvolutions = value;
  }

  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get image() {
    return this._image;
  }

  set image(value) {
    this._image = value;
  }

  get capacities() {
    return this._capacities;
  }

  set capacities(value) {
    this._capacities = value;
  }

  get talents() {
    return this._talents;
  }

  set talents(value) {
    this._talents = value;
  }

  get weaknesses() {
    return this._weaknesses;
  }

  set weaknesses(value) {
    this._weaknesses = value;
  }

  get statistics() {
    return this._statistics;
  }

  set statistics(value) {
    this._statistics = value;
  }

  get caught() {
    return this._caught;
  }

  set caught(value) {
    this._caught = value;
  }

  get levelEvolution() {
    return this._levelEvolution;
  }

  set levelEvolution(value) {
    this._levelEvolution = value;
  }

  get conditionEvolution() {
    return this._conditionEvolution;
  }

  set conditionEvolution(value) {
    this._conditionEvolution = value;
  }
}
