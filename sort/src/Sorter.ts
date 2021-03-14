// Interface to tell other classes for how to be eligible for sorting
// The class should have the following properties: length, compare and swap methods

interface Sortable {
  length: number
  compare(leftIndex: number, rightIndex: number): boolean
  swap(leftIndex: number, rightIndex: number): void
}

export class Sorter {
  // note that this is shorthand for declaring separately and then
  // initializing using this keyword
  constructor(public collection: Sortable) {
  }
  sort(): void {
    const { length } = this.collection
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1)
        }
      }
    }
  }
}