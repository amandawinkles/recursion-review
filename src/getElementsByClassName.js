// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
// Needs document.body, element.childNodes, and element.classList.
var getElementsByClassName = function(className) {
  // your code here
  // Set up an empty array holding all of the matching elements.
  var matchingArr = [];
  // We look at element.classList...
  // Inner recursion function...pass in elements...
  function checkElements(element) {
   // Check elements...
    // If element.classList exists, and className is in classList...push into matching elements array.
    if(element.classList && element.classList.contains(className)) {
      matchingArr.push(element);
    }
    // Iterate through element.childNodes...
    if(element.childNodes) {
      for(var i = 0; i < element.childNodes.length; i++) {
        // Recursively call inner function on element.childNodes[i].
        checkElements(element.childNodes[i]);
      }
    }
  }
  // Call inner function on document.body.
  checkElements(document.body);
  // Return matching elements array.
  return matchingArr;
};
