var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {}; 
  this.length = 0;

};

Stack.prototype.size = function() {
  return this.length < 0 ? 0 : this.length;
};

Stack.prototype.push = function(value) {
  this.length++;
  this.storage[this.length] = value;
};

Stack.prototype.pop = function() {
  var temp = this.storage[this.length];
  delete this.storage[this.length];
  this.length--;
  return temp;
};


