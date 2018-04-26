class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.length = 0;
  }

  size() {
    return this.length < 0 ? 0 : this.length;
  }

  push(value) {
    this.length++;
    this.storage[this.length] = value;
  }

  pop() {
    var temp = this.storage[this.length];
    delete this.storage[this.length];
    this.length--;
    return temp;
  }

}

