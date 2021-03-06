const today = new Date
// If we hover over today variable, we can see that TS already infers what type it has
// If we do a today. then it will list down all the methods and 
// properties associated with that type.
// If we try to use a property like today.afdhgf that doesn't exist then TS will
// identify and show an error.
today.getHours()


const person = {
  age: 20
}

person.age // fine
// person.afasfds // error

class Color {}

const red = new Color()
// red. --> Error

// Where do we use them --> Everywhere. Every value that we define.
