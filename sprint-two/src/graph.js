

// Instantiate a new graph
var Graph = function() {
  this.graphNodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.graphNodes[node] = {edges : {}}
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return !!this.graphNodes[node];
}

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var key in this.graphNodes[node].edges) {
    this.graphNodes[key].edges[node] = false;
  }
  delete this.graphNodes[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.graphNodes[fromNode].edges[toNode] === true;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.graphNodes[fromNode].edges[toNode] = true;
  this.graphNodes[toNode].edges[fromNode] = true;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  this.graphNodes[fromNode].edges[toNode] = false;
  this.graphNodes[toNode].edges[fromNode] = false;
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var node in this.graphNodes) {
    cb(node);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
