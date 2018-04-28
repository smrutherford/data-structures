var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);


};

HashTable.prototype.insert = function(k, v) {

  var index = getIndexBelowMaxForKey(k, this._limit);
  // var index = 0;

  var container = LimitedArray(1);
  var tuple = LimitedArray(2);
  tuple.set(0, k);
  tuple.set(1, v);
  var added = false;
  var counter = 0;

  // if container is empty
  if (this._storage.get(index) === undefined) {
    container.set(0, tuple);
    this._storage.set(index, container);
  } else {
    // if key already exists, update key
    this._storage.get(index).each(function(tuple) {
      if (tuple.get(0) === k) {
        tuple.set(1, v);
        added = true;
        counter++;
      }
    });

    // if key doesn't exist, create new container w/ length = counter + 1
    if (added === false) {
      var newContainer = LimitedArray(counter + 1);
      newContainer.each(function(newTuple, i) {
        newContainer.set(i, this._storage.get(index).get(i));
      });
      // add new tuple to new container
      newContainer.set(counter - 1, tuple);
      // replace new container with old container in storage
      this._storage.set(index, newContainer);
    }
  }

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var finalAns = undefined;
  this._storage.get(index).each((tuple, i) => {

    if (tuple.get(0) === k) {

      finalAns= tuple.get(1);
    }


  })
  return finalAns;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // var index = 0;
  this._storage.get(index).get(0).set(1, undefined);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
