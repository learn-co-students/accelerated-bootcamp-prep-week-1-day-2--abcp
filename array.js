function addElementToBeginningOfArray(array, element) {
 // add the element to the beginning of the array without mutating the array

  return [element, ...array]
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

function destructivelyRemoveElementFromBeginningOfArray(array) {

}

function removeElementFromBeginningOfArray(array) {
return array.slice(1)
  
}

function destructivelyRemoveElementFromEndOfArray(array) {
  return destructivelyRemoveElementFromEndOfArray.pop(element)
  return array
}



function removeElementFromEndOfArray(array) {
return array.slice(0, array.length - 1)
}
