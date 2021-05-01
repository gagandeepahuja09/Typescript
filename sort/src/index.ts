import { Sorter } from './Sorter'
import { NumbersCollection } from './NumbersCollection'
import { CharactersCollection } from './CharactersCollection'
import { LinkedList } from './LinkedList'

const numbers = new NumbersCollection([ 10, 21, 0, -4, -8])
const sorter = new Sorter(numbers)
sorter.sort()
console.log(numbers.data)

const chars = new CharactersCollection('XabYZadsfsar')
const sorterChar = new Sorter(chars)
sorterChar.sort()
console.log(chars.data)

const linkedList = new LinkedList()
linkedList.add(30)
linkedList.add(-10)
linkedList.add(40)
linkedList.add(3)
linkedList.add(-300)

const sorterLL = new Sorter(linkedList)
sorterLL.sort()
linkedList.print()
