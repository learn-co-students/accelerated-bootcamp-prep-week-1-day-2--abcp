function addElementToBeginningOfArray(array, element) {
 // add the element to the beginning of the array without mutating the array
 return [element,...array];
}

function destructivelyAddElementToBeginningOfArray(array, element){
  // add element to the beginning of the array by mutating the array
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  return [...array,element];

}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
  array.splice(array.length-1,1)
  return array
}


var myArray =[1,2,3];
console.log(addElementToBeginningOfArray(myArray, "elementtobeginning"));
console.log(destructivelyAddElementToBeginningOfArray(myArray,"destructivelybeginning"));
console.log(addElementToEndOfArray(myArray,"element to end"));
console.log(destructivelyAddElementToEndOfArray(myArray,"detructiveelement"));
console.log(accessElementInArray(myArray,2));
console.log(destructivelyRemoveElementFromBeginningOfArray(myArray));
console.log(removeElementFromBeginningOfArray(myArray));
console.log(destructivelyRemoveElementFromEndOfArray(myArray));
console.log(removeElementFromEndOfArray(myArray));

// CHALLENGE: remove an element at a given index of an array (nondestructively)
function nonDestructivelyRemoveAnElement(array,index){
  return array.splice(index,1);
}

//console.log(nonDestructivelyRemoveAnElement(myArray,2))
