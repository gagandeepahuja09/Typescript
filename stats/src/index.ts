// we will need to install type definition file for standard node packages as well
// npm i @types/node
import fs from 'fs'

const matches = fs
  .readFileSync('football.csv', {
    encoding: 'utf-8'
  })
  .split('\n')
  .map((row: string): string[] => row.split(','))

console.log('Hi there', matches)