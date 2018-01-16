var names = ["Hansel", "Greta", "Wicked Witch"]

console.log(names[0])
console.log(names[1])
console.log(names[2])

for (i = 0; i < names.length; i++) {
  console.log(name)
}


while (condition) {
  // loop body
}

i = 0
while (i <= 10) {
  console.log(i)
  i++
}

/*
While loops will execute the looop body if the condition is true
*/

[1, 2, 3].forEach(function(element) {
  console.log(element)
})
//There was a missing ) in the forEach method above.

function loop25Times(array) {
  for (var i = 1; i < 26; i++) {
    array.push(`I am step number ${i} of the loop`);
  }
  return array;
}

/*
I don't understand why the instructions say to return
the array that contains the 25 new statements.
I feel that just console logging the statements should suffice.
*/
