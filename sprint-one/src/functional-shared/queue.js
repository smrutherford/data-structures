var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    storage: {},
    end: 0,
    front: 0
  };
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.end] = value;
    this.end++;
  },
  dequeue: function() {
    var temp = this.storage[this.front];
    delete this.storage[this.front];
    this.front++;
    return temp;	
  },
  size: function(){
    return this.end - this.front < 0 ? 0 : this.end - this.front;
  }	
};


