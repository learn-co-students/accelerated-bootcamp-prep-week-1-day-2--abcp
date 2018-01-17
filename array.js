function addElementToBeginningOfArray(array, element) {
 var newArray = [element, ...array];
 return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  var bigArray = [...array, element];
  return bigArray;
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
  array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
  var lastIndexItem = array.length-1;
  array.slice(0, lastIndexItem);
}

function removeAtIndex(array, index) {
  var new editedArray = [array.slice(o,index), array.slice(index+1)];
  return editedArray;
}