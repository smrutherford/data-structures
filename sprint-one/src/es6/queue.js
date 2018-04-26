class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.begin = 0;
    this.end = 0;
  }

  size() {
    return this.end - this.begin < 0 ? 0 : this.end - this.begin;
  }

  enqueue(value) {
    this.storage[this.end] = value;
    this.end++;
  }

  dequeue() {
    var temp = this.storage[this.begin];
    delete this.storage[this.begin];
    this.begin++;
    return temp;
  }

}
