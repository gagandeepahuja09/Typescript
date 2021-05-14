// We can assign any value that we want in an interface. We are not limited
// to primitive types. We can assign Objects / Dates / Functions, etc
interface Reportable {
  summary(): string
  // needs to have a function which returns summary in string format
}

const oldCivic = {
  name: 'Civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}
    Year: ${this.year}
    Broken? ${this.broken}`
  }
}

const myDrink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`
  }
}

// myDrink and oldCivic are very different things but both have a summary function
// hence are of type reportable
// We can use a single interface to describe the shape of very different objects
// So, we made a very generic looking interface with a very generic name print summary

const printSummary = (vehicle: Reportable): void => {
  console.log(vehicle.summary())
}

printSummary(oldCivic)
printSummary(myDrink)

// problems with this: 
// 1. the annotation is really long
// 2. There might be other cars with a similar structure, hence this is not very reusable