var array = ['uberDriver','cashier','Assistant manager','dominoes delivery']


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

function removeElementFromEndOfArray(array) {
return array.slice(0,array.length-1);
}

function destructivelyRemoveElementFromEndOfArray(array) {
return array.pop();
}

function removeElementFromBeginningOfArray(array) {
return array.slice(1);
}
