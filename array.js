function addElementToBeginningOfArray(array, element) {
 return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element){
 array.unshift(element)
 return array
}

function addElementToEndOfArray(array, element) {
return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element) {
array.push(element)
return array
}

function accessElementInArray(array, index) {
console.log(array[1])
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
array.shift(element)
return array
}

function removeElementFromBeginningOfArray(array) {
  array.pop(element)
  return array
}

function destructivelyRemoveElementFromEndOfArray(array) {
  return array.slice(1)
}

function removeElementFromEndOfArray(array) {
 return array.slice(0, array.length - 1)
}

function nonDestructionvelyRemove