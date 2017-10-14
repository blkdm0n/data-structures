var BinarySearchTree = function(value) {
  
  var obj = Object.create(BinarySearchMethods);
  //value of node
  obj.value = value;
  //left child
  obj.left = null;
  //right child
  obj.right = null;
  
  return obj;
  
};

var BinarySearchMethods = {};

BinarySearchMethods.insert = function(value) {
  
  if (value < this.value) {
    if (!this.left) {
      this.left = new BinarySearchTree(value);   
    } else {
      this.left.insert(value);
    }
  } else {
    if (!this.right) {
      this.right = new BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
};

BinarySearchMethods.contains = function(value) {
  var output = false;

  var traverser = function(node, value) {
    if (node === null) { 
      return output;
    }
    if (node.value === value) {
      output = true;  
    } 
    
    if (node.value < value) { 
      traverser(node.right, value);
    } else if (node.value > value) { 
      traverser(node.left, value);
    } 
  };
  traverser(this, value);

  return output;

};


BinarySearchMethods.depthFirstLog = function(callback) {
  
  





};



/*
 * Complexity: What is the time complexity of the above functions?
 */

var mytree = new BinarySearchTree(10);
mytree.insert(8);
mytree.insert(7);
mytree.insert(15);
mytree.contains(7);
// console.log(mytree);