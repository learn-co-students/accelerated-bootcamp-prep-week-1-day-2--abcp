function addElementToBeginningOfArray(array, element) {
  const newArr = [elemAdd, ...arr];
  return newArr;
}

function destructivelyAddElementToBeginningOfArray(array, element){
  arr.unshift(elemAdd);
  return arr;
}

function addElementToEndOfArray(array, element) {
  const newArr = [...arr, elemAdd];
  return newArr;
}

function destructivelyAddElementToEndOfArray(array, element) {
  arr.push(elemAdd);
  return arr;
}

function accessElementInArray(array, index) {
  return arr[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  arr.shift();
  return arr;
}

function removeElementFromBeginningOfArray(array) {
  arr2 = arr.slice(1);
  return arr2;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  arr.pop();
  return arr;
}

function removeElementFromEndOfArray(array) {
  var arr2 = arr.slice(0,-1);
  return arr2
}
