function addElementToBeginningOfArray(array, element) {
 // add the element to the beginning of the array without mutating the array
  var newArray = [element, ...array];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, element){
  // add element to the beginning of the array by mutating the array
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  var newArray = [...array, element];
  return newArray;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift(element);
  return array;
}

function removeElementFromBeginningOfArray(array) {
  var newArray = array.slice(1);
  return newArray;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop(element);
  return array;
}

function removeElementFromEndOfArray(array) {
  var newArray = array.slice(0, array.length-1);
  return newArray;
}

