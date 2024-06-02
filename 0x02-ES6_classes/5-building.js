export default class Building {
  constructor(sqft) {
    if(this.constructor !== Building) {
      const pro = Object.getOwnPropertyNames(this.constructor.prototype);
      if(!pro.find((e) => e === 'evacuationWarningMessage')) {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    this._sqft = value;
  }
}
