function addElementToBeginningOfArray(array, element) {
   return [element, ...array]
   // add the element to the beginning of the array without mutating the array
}

function destructivelyAddElementToBeginningOfArray(array, element){
  return [array.unshift(element)]
  // add element to the beginning of the array by mutating the array
}

function addElementToEndOfArray(array, element) {
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function accessElementInArray(array, index) {
  return array[element]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array, element) {
  array.slice(1)
  return array
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array, element) {
  array.slice(0, array.length - 1)
  return array
}
