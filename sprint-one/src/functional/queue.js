var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values

  var key = 0;
  var start = 0;
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[key] = value;
    key++;
  };

  someInstance.dequeue = function() {
    
    if (storage[start]) { 
      var last = storage[start];
      delete last;
      start++;
    }

    return last;
    
  };

  someInstance.size = function() {

    return key-start;
  };

  return someInstance;
};






