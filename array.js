function addElementToBeginningOfArray(array, element) {
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

}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift(elemet);
}

function removeElementFromBeginningOfArray(array) {
  newArray = array.slice(0);
  return newArray;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop(element);
  return array;
}

function removeElementFromEndOfArray(array) {
  newArray = array.pop(element);
  return newArray;
}
