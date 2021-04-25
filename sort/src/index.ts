import { Sorter } from './Sorter'
import { NumbersCollection } from './NumbersCollection'
import { CharactersCollection } from './CharactersCollection'

const numbers = new NumbersCollection([ 10, 21, 0, -4, -8])
const sorter = new Sorter(numbers)
sorter.sort()
console.log(numbers.data)

const chars = new CharactersCollection('XabYZadsfsar')
const sorterChar = new Sorter(chars)
sorterChar.sort()
console.log(chars.data)
