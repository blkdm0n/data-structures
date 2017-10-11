var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var key = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[key] = value;
    key++; 
  };

  someInstance.pop = function() {
    var lastElement = storage[key]
    if(key){ 
      delete storage[key];
      key--;
    }
    return lastElement
  };

  someInstance.size = function() {
    return key;

  };

  return someInstance;
};

var s1 = Stack()
s1.push(1)
s1.pop()
// console.log(s1.size())
