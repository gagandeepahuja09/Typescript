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
new ArrayOfAnything(['a', 'b', 'c', 1, true])