class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}
  get(index: number): T {
    return this.collection[index]
  }
}
// Just a like a function(parameters) 
// We don't know the type we can expect at runtime. 
new ArrayOfAnything<string>(['a', 'b', 'c'])

// Type inference with Generics
// Ts will figure out the type on it's own if we don't tell it.
// This is very much similar to type inference for return types.
// Here also, we should manually add the type because it will help
// us detect errors.
new ArrayOfAnything(['a', 'b', 'c', 1, true])

const printArray = <T>(arr: T[]): void => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}

printArray<string | number>(['a', 'b', 'c', 1])

// Generic Constraints
// Feature to limit the types that we can pass through

class House {
  print(): void {
    console.log('This is a house')
  }
}

class Car {
  print(): void {
    console.log('This is a car')
  }
}

// Without constraints
// const printHousesOrCars = <T>(arr: T[]): void => {
//   for (let i = 0; i < arr.length; i++) {
//     // we get an error ==> Property print does not exist on type T
//     // this is because here T can be any possible type
//     // Hence we need to put a constraint on it
//     arr[i].print()
//   }
// }

interface Printable {
  print(): void
}

const printHousesOrCars = <T extends Printable>(arr: T[]): void => {
  for (let i = 0; i < arr.length; i++) {
    // we get an error ==> Property print does not exist on type T
    // this is because here T can be any possible type
    // Hence we need to put a constraint on it
    arr[i].print()
  }
}

printHousesOrCars<House>([new House(), new House()])