function addElementToBeginningOfArray(array, element) {
 return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element){
  
}

function addElementToEndOfArray(array, element) {

}

function destructivelyAddElementToEndOfArray(array, element) {

}

function accessElementInArray(array, index) {

}

function destructivelyRemoveElementFromBeginningOfArray(array, element) {
  array.shift(element);
  return array;
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array, element) {
  array.pop(element);
  return array
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
}
