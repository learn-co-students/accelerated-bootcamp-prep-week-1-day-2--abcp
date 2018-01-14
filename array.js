function addElementToBeginningOfArray(array, element) {
 // add the element to the beginning of the array without mutating the array
}

function destructivelyAddElementToBeginningOfArray(array, element){
  // add element to the beginning of the array by mutating the array
}

function addElementToEndOfArray(array, element) {

}

function destructivelyAddElementToEndOfArray(array, element) {

}

function accessElementInArray(array, index) {

}

function destructivelyRemoveElementFromBeginningOfArray(array, element) {
  array.shift(element)
return array
}


function removeElementFromBeginningOfArray(array, element) {
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array, element) {
array.pop(element)
return array
}

function removeElementFromEndOfArray(array) {
return array.slice(0, array.length - 1)
}
