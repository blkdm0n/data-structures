var Stack = function() {
  var someInstance = {};
  var key = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    key++;
    storage[key] = value;
      
  };

  someInstance.pop = function() {
    var last = storage[key];
    if (storage[key]) {
      
      delete storage[key];
      key--;
    }
    return last;
  };

  someInstance.size = function() {
    return key;
  };

  return someInstance;
};
