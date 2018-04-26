var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.head = 0;
  someInstance.end = 0;

  return someInstance;
};

var queueMethods = {
  size: function() {
    return this.end - this.head < 0 ? 0 : this.end - this.head;	
  }, 
  enqueue: function(value) {
    this.storage[this.end] = value;
    this.end++;	
  },
  dequeue: function() {
    var temp = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
    return temp;
  }
};


