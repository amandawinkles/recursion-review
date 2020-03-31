// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // create new empty array to return final stringified array.
  var stringedArray = [];
  // create another empty array to return final stringifed object.
  var stringedObj = []; 
  // if typeof obj is a function or undefined, return undefined.
  if(typeof obj === "function" || typeof obj === undefined) {
    return undefined;
  }
  // if obj is null or typeof obj is a number or a boolean, return an empty string and the obj.
  if(obj === null || typeof obj === "number" || typeof obj === "boolean") {
    return "" + obj;
  }
  // if typeof obj is a string, return '"' + obj + '"'.
  if(typeof obj === "string") {
    return '"' + obj + '"';
  }
  // For remaining typeofs, use recursion as seen below...
  
  // If obj is an array...
  if(Array.isArray(obj)) {
    // loop through obj.
    for(var i = 0; i < obj.length; i++) {
      // push stringifyJSON(obj[i]) into new array.
      stringedArray.push(stringifyJSON(obj[i]));
      // return '[' + new empty array + ']'.
    }
    return "[" + stringedArray + "]";
  }

  // If obj is an object...
  else {
    // loop through obj.
    for(var key in obj) {
      if(typeof obj[key] === undefined || typeof key === undefined || typeof obj[key] === "function" || typeof key === "function") {
        return "{}";
      }
      // push stringifyJSON(key) + ": " + stringifyJSON(obj[key]) into new array.
      stringedObj.push(stringifyJSON(key) + ":" + stringifyJSON(obj[key]));
      // return '{\n' + another empty array + '\n}'.
    }
    return "{" + stringedObj + "}";
  }
};
