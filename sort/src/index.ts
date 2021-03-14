import { Sorter } from './Sorter'
import { NumbersCollection } from './NumbersCollection'

const numbers = new NumbersCollection([ 10, 21, 0, -4, -8])
const sorter = new Sorter(numbers)
sorter.sort()
console.log(numbers.data)
