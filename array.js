function addElementToBeginningOfArray(array, element) {
 // add the element to the beginning of the array without mutating the array
}

function destructivelyAddElementToBeginningOfArray(array, element){
  // add element to the beginning of the array by mutating the array
}

function addElementToEndOfArray(array, element) {
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function accessElementInArray(array, index) {

}

function destructivelyRemoveElementFromBeginningOfArray(array) {
    array.unshift(element);
    return array;
}

function removeElementFromBeginningOfArray(array) {
  array.slice(0);
  return array;
}

function destructivelyRemoveElementFromEndOfArray(array) {

}

function removeElementFromEndOfArray(array) {

}
