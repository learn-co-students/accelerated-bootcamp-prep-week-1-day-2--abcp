function addElementToBeginningOfArray(array, element) {
return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
return [...array, element]
return array 
}

function destructivelyAddElementToEndOfArray(array, element) {
return array.push(element)
}

function accessElementInArray(array, index) {

}

function destructivelyRemoveElementFromBeginningOfArray(array,element) {
array.shift(element)
return array
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array) {
array.pop(element)
return array
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
}
