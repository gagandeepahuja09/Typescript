// we will need to install type definition file for standard node packages as well
// npm i @types/node
import { match } from 'assert/strict'
import fs from 'fs'

const matches = fs
  .readFileSync('football.csv', {
    encoding: 'utf-8'
  })
  .split('\n')
  .map((row: string): string[] => row.split(','))

let manUnitedWins = 0

matches.forEach(match => {
  manUnitedWins += +(
    (match[1] === 'Man United' && match[5] === 'H')
    || (match[2] === 'Man United' && match[5] === 'A')
  )
})

console.log(`Man united won ${manUnitedWins} games`)