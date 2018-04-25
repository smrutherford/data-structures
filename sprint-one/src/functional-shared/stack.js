var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    storage: {},
    length: 0
  };
  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {
  size: function() {
    if (this.length < 0) {
      return 0;
    } else {
      return this.length;	
    }
  },
  push: function(value) {
    this.length++;
    this.storage[this.length] = value;
  },
  pop: function() {
    this.length--;
    return this.storage[this.length + 1];
  }
};


