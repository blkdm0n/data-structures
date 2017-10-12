var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values

  var key = 0;
  var start = 0;
  var storage = {};
  var key = 0;
  var end = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
<<<<<<< HEAD
    storage[key] = value;
=======
    storage[key] = value; 
    console.log(storage)
>>>>>>> 0bc9e544e43e4ebed65091f5be68ccf7170ed1dd
    key++;
  };
  // console.log(storage) why doesn't print ? 

  someInstance.dequeue = function() {
<<<<<<< HEAD
    
    if (storage[start]) { 
      var last = storage[start];
      delete last;
      start++;
    }

    return last;
    
  };

  someInstance.size = function() {

    return key-start;
=======
    var firstElement = storage[end]
    if(storage[end]){    
        delete storage[end];
        end++;
    }
    return firstElement
  };

  someInstance.size = function() {
    return key-end;
>>>>>>> 0bc9e544e43e4ebed65091f5be68ccf7170ed1dd
  };

  return someInstance;
};


<<<<<<< HEAD




=======
>>>>>>> 0bc9e544e43e4ebed65091f5be68ccf7170ed1dd
