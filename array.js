function addElementToBeginningOfArray(array, element) {
 // add the element to the beginning of the array without mutating the array
  return[element...array]
}

function destructivelyAddElementToBeginningOfArray(array, element){
  // add element to the beginning of the array by mutating the array
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  // add the element to the end of the array without mutating
  return[...array, element]
}

function destructivelyAddElementToEndOfArray(array, element) {
  // add element to the end of the array by mutating
  array.push(element)
  return array
}

function accessElementInArray(array, index) {
  return array[2]
}

function destructivelyRemoveElementFromBeginningOfArray(array, element) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array, element) {
  //not mutuating!!
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array, element) {
  //destructively!
  array.pop(element)
  return array
}

function removeElementFromEndOfArray(array) {
  // array.slice(array.length - 1)
  // return array
  return array.slice(0, array.lenth -1)
}

function nonDestructivelyRemoveAtElement(array, index) {
  
}
