function addElementToBeginningOfArray(array, element) {
 // add the element to the beginning of the array without mutating the array
 return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element){
  // add element to the beginning of the array by mutating the array
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  return [..., array, element]
}

function destructivelyAddElementToEndOfArray(array, element) {
  return array.push(element)
}

function accessElementInArray(array, index) {
 return array[element]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift[element]
  return array
}

function removeElementFromBeginningOfArray(array) {
  return array.slice()
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.lenght - 1)
}
