class Sorter {
  // note that this is shorthand for declaring separately and then
  // initializing using this keyword
  constructor(public collection: number[] | string) {
  }
  sort(): void {
    const { length } = this.collection
    // Typescript is really smart, if can understand that this is only
    // for array types
    if (this.collection instanceof Array) {
      for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - i - 1; j++) {
          if (this.collection[j] > this.collection[j + 1]) {
            const leftHand = this.collection[j]
            this.collection[j] = this.collection[j + 1]
            this.collection[j + 1] = leftHand
          }
        }
      }
    }
    if (typeof(this.collection) === 'string') {
      
    }
  }
}

const sorter = new Sorter([ 1, 9, -5, 0])
sorter.sort()
console.log(sorter.collection)