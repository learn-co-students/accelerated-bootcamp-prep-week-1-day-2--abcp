var course = {
  title: "Bootcamp Prep",
  description: "an introduction to JavaScript"
}

var course = new Object({
  title: "Bootcamp Prep",
  description: "an introduction to JS"
})

course.instructor = "Sophie DeBenedetto"

// or

course["instructor"] = "Sophie DeBenedetto"


Object.assign(course, {start_date: "2017-01-01"})

Object.assign({}, course, {start_date: "2017-01-01"})

delete course["title"]

Object.assign({}, course, {description: "a kick-ass introduction to JS"})

function twoObjects(originalObject, newObject) {
  let theTwoObjects = Object.assign({}, originalObject, newObject);
  return theTwoObjects;
}

/*
Object.assign takes in 3 arguments
1) a new empty object
2) the name of the variable assigned to an existing object
3) the key value pairs (more than 1 can be added)
*/
