<<<<<<< HEAD
var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element){
 return[element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element){
 array.unshift(element);
 return array
}

function addElementToEndOfArray(array, element){
 return[...array, element];
=======
function addElementToBeginningOfArray(array, element) {
 array.push(element);
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array = [element, ...array];
}

function addElementToEndOfArray(array, element) {
  
>>>>>>> beda249207aec93a15a599ab351b2875fa648aec
}

function destructivelyAddElementToEndOfArray(array, element){
 array.push(element);
 return array;
}

function accessElementInArray(array, index) {
 return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
 array.shift(element);
 return array;
}

function removeElementFromBeginningOfArray(array) {
 return array.slice(1, array.length-1);
}

function destructivelyRemoveElementFromEndOfArray(array) {
 array.pop(element);
 return array;
}

function removeElementFromEndOfArray(array) {
 return array.slice(0, array.length-1);
}
