function addElementToBeginningOfArray(array, element) {
 // add the element to the beginning of the array without mutating the array
 return(element, ...array)
}

function destructivelyAddElementToBeginningOfArray(array, element){
  // add element to the beginning of the array by mutating the array
  array.shift(element)
  return array
}

function addElementToEndOfArray(array, element) {
return(...array, element)
}

function destructivelyAddElementToEndOfArray(array, element) {
array.push(element)
return array
}

function accessElementInArray(array, index) {
return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
array.shift(element)
return(array)
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array) {
array.pop()
return(array)
}

function removeElementFromEndOfArray(array) {
return array.slice (0, array.length -1)
}

//challenge: remove an element from the middle of an array/at any given point, and return a copy of the original array, minus that element

function nonDestructivelyRemoveAtIndex(array, index) {
  //hint: involves slice and spread
  return (...array.slice(0,1),...array.slice(4))
}
