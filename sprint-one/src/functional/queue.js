var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var values = [];

  // Implement the methods below

  someInstance.enqueue = function(value) {
    size++;
    values.push(value);
  };

  someInstance.dequeue = function() {
    size--;
    return values.pop();
  };

  someInstance.size = function() {
    if (size < 0){
      return 0;
    } else {
      return size;    
    }
  };

  return someInstance;
};
