function addElementToBeginningOfArray(array, element) {
 // add the element to the beginning of the array without mutating the array
 return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element){
  // add element to the beginning of the array by mutating the array
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  return [...array, element];
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array) {
  return [...array].slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
  return [...array].slice(0, array.length-1)
}

function nonDestructivelyRemoveAtIndex(array, index) {
// using slice _and_ spread??
  var newArray = [...array];
  newArray.splice(index, 1);
  return newArray;
}

/*
The slice method takes in 2 arguments
1)  Zero-based index at which to begin extraction.
2)  Zero-based index before which to end extraction.
If only one arguement, it automatically assumes that first arguemtn is 0.
push(), shift(), pop(), unshift() returns a number with is length of array
so returning the array is needed to print out the array to console.
*/
