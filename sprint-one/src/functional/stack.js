var Stack = function() {
  var someInstance = {};
  var key = 0;

  // Use an object with numeric keys to store values
  var storage = {};
  var key = 0;

  // Implement the methods below
  someInstance.push = function(value) {
<<<<<<< HEAD
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
=======
    key++; 
    storage[key] = value;
 
  };

  someInstance.pop = function() {
    var lastElement = storage[key]
    if(key){ 
      delete storage[key];
      key--;
    }
    return lastElement
>>>>>>> 0bc9e544e43e4ebed65091f5be68ccf7170ed1dd
  };

  someInstance.size = function() {
    return key;
<<<<<<< HEAD
=======

>>>>>>> 0bc9e544e43e4ebed65091f5be68ccf7170ed1dd
  };

  return someInstance;
};
