function addElementToBeginningOfArray(array, element) {
 // add the element to the beginning of the array without mutating the array
 return [array, ...element]
}

function destructivelyAddElementToBeginningOfArray(array, element){
 return array.unshift[element] // add element to the beginning of the array by mutating the array
}

function addElementToEndOfArray(array, element) {
 return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element) {
 array.push(element)

  return array
}

function accessElementInArray(array, index) {
return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
array.shift()

  return array
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array) {
array.pop()

  return array
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)

}
