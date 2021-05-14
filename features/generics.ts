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