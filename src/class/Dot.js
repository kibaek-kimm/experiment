export default class Dot{
  #x;
  #y;
  #size;

  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }

  set x(x) {
    this.#x = x;
  }

  get x() {
    return this.#x;
  }

  set y(y) {
    this.#y = y;
  }

  get y() {
    return this.#y;
  }

  set size(size) {
    this.#size = size;
  }

  get size() {
    return this.#size;
  }
}