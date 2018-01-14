function addElementToBeginningOfArray(array, element) {
[element, ...array]
  
 // add the element to the beginning of the array without mutating the array
}

function destructivelyAddElementToBeginningOfArray(array, element){
array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
[...array, element]
}

function destructivelyAddElementToEndOfArray(array, element) {
array.push(element)
return array
}

function accessElementInArray(array, index) {

}

function destructivelyRemoveElementFromBeginningOfArray(array, element) {

 array.shift(element)
 return array
}

function removeElementFromBeginningOfArray(array) {
 
 var newarr=array.slice(1)
 return newarr
}

function destructivelyRemoveElementFromEndOfArray(array, element) {
 array.pop(element)
 return array
}

function removeElementFromEndOfArray(array) {
var newarr= array.slice(0, array.length-1)
return newar

}


