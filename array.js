function addElementToBeginningOfArray(array, element) {
  return [element, ...aray]
 // add the element to the beginning of the array without mutating the array
}

function destructivelyAddElementToBeginningOfArray(array, element){
  return array.unshift(element)
  // add element to the beginning of the array by mutating the array
}

function addElementToEndOfArray(array, element) {
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element) {
  return array.push(element)
}

function accessElementInArray(array, index) {
  array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  return array.push(element)
//
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop(element)
  return array
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length -1)
}
