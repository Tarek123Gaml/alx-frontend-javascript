class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  get code() {
    return this._code
  }

  get name() {
    return this._name;
  }

  set code(value) {
    this.code = value;
  }

  set name(value) {
    this.name = value;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
