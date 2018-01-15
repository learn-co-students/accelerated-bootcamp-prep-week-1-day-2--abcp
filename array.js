function addElementToBeginningOfArray(array, element) {
 // add the element to the beginning of the array without mutating the array
 return [element,...array];
}

function destructivelyAddElementToBeginningOfArray(array, element){
  // add element to the beginning of the array by mutating the array
  return array.unshift(element);
}

function addElementToEndOfArray(array, element) {
return [...array,element];
}

function destructivelyAddElementToEndOfArray(array, element) {
return array.push(element);
}

function accessElementInArray(array, index) {
return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
return array.shift();
}

function removeElementFromBeginningOfArray(array) {
return array.splice(0,1);
}

function destructivelyRemoveElementFromEndOfArray(array) {
return array.pop();
}

function removeElementFromEndOfArray(array) {
  let x = (array.length - 1) ;
return array.splice(x,1);
}
