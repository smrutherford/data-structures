var BinarySearchTree = function(value) {
  var newBST = {
    value: value,
    left: null,
    right: null
  };


 _.extend(newBST, bstMethods);

 return newBST;
};

var bstMethods = {
  insert: function(value) {
    let node = BinarySearchTree(value);


   if (this.value < value) {
      if (this.right === null) {
        this.right = node;
      } else {
        this.right.insert(value);
        console.log(node);
      }
    } else {
      if (this.left === null) {
        this.left = node;
      } else {
        this.left.insert(value);
        console.log(node);

     }
    }
  },

 contains: function(target) {
    this.visited = true;
    if (this.value === target) {
      return true;
    } else {
      if (target < this.value) {
        if (this.left !== null && this.left.visited !== true) {
          return this.left.contains(target);
        }
      } else {
        if (this.right !== null && this.right.visited !== true) {
          return this.right.contains(target);
        }
      }
   }
    return false;
  },

 depthFirstLog: function(cb) {
   var traverse = function(node) {
     if (node !== null && !node.visited) {
       node.visited === true;
       cb(node.value);
       traverse(node.left);
       traverse(node.right);
     }
   };
   traverse(this);
 }


}

/*
 * Complexity: What is the time complexity of the above functions?
 */
