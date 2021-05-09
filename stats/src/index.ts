// we will need to install type definition file for standard node packages as well
// npm i @types/node
import { MatchReader } from './MatchReader'
import { MatchResult } from './MatchResult'

const reader = new MatchReader('football.csv')
reader.read()

let manUnitedWins = 0

// we could also use object, but they are not meant for that purpose
// they are meant for storing records. + enums can be used as a type in typescript
// we can return a MatchResult & use in TS
// behind the scenes, an object is created
// Primary goal is to signal other engineers that these are all closely related values

reader.data.forEach(match => {
  manUnitedWins += +(
    (match[1] === 'Man United' && match[5] === MatchResult.HomeWin)
    || (match[2] === 'Man United' && match[5] === MatchResult.AwayWin)
  )
})

console.log(`Man united won ${manUnitedWins} games`)