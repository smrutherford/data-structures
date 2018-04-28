var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    let newNode = Node(value);
    if (list.tail === null) {
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = list.tail.next;
    }

    if (list.head === null ) {
      list.head = list.tail;
    }

  };

  list.removeHead = function() {
    let removedNode = list.head;
    list.head = list.head.next;
    return removedNode.value;
  };

  list.contains = function(target) {
    let curPointer = list.head;
    while (curPointer !== null) {
      if (curPointer.value === target) {
        return true;
      }
      curPointer = curPointer.next;
    }

    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
let a = Node(2);