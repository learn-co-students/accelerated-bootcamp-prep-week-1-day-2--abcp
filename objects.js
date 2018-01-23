var course = {
  title: "Bootcamp Prep",
  description: "an introduction to JavaScript"
}

var courseA = new Object({
  title: "accerated Bootcamp Prep",
  description: "accerated JS"
})


course.instructor = "Sayaka Tamura"

// or

courseA["instructor"] = "Sophie DeBenedetto"


Object.assign(course, {start_date: "2017-01-22"})

Object.assign({}, courseA, {start_date: "2017-01-01"})

delete course["title"]

Object.assign({}, course, {description: "a kick-ass introduction to JS"})
