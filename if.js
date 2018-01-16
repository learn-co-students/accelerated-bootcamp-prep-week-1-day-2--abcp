var pokemon = "Pikachu"

if (pokemon == "Pikachu") {
  console.log("I choose you Pikachu!!")
}

function someFunction (num) {
  if (num > 10) {
    return num;
  } else {
    return "Sorry that number isn't greater than 10!";
  }
}
console.log(someFunction(5));

var burgers = ["Bob", "Linda", "Tina", "Louise", "Gene"];
function printNames (array) {
  for(i = 0; i < array.length; i++) {
    console.log(burgers[i]);
  }
}

printNames(burgers);