function addElementToBeginningOfArray(array, element) {
 // add the element to the beginning of the array without mutating the array
 var newArray = [element, ...array];
 return array
 // return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element){
  // add element to the beginning of the array by mutating the array
  var newArry2 = array.unshift(element);
  return newArry2;
  // return array.unshift(element);
}

function addElementToEndOfArray(array, element) {
  newArray = [...array, element];
  return newArray;
  // return [...array, element]
  // array.slice(0, array.length-1)
}

function destructivelyAddElementToEndOfArray(array, element) {
  newArray = array.push(element);
  return newArray;
}

function accessElementInArray(array, index) {
  var index = 0;
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array, element) {
  array.shift(element );
  return array

}

function removeElementFromBeginningOfArray(array, element) {
  return array.slice(1)

}

function destructivelyRemoveElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)

}

function removeElementFromEndOfArray(array) {

}
