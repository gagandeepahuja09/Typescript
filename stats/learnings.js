// npm init -y
// tsc --init ==> tsconfig.json
// npm i nodemon concurrently
// mkdir src
// mkdir build

// tsConfig.json
// outDir, rootDir
// "outDir": "./build",                    
// "rootDir": "./src"

// scripts in package.json
// "scripts": {
//   "start:build": "tsc -w",
//   "start:run": "nodemon build/index.js",
//   "start": "concurrently npm:start:*"
// }


// Issues with the earlier approach
// 1. Magic string comparisons like === 'A', 'H', 'D'. No one is aware
// what these mean. Variable creation is an option. const homeWin = 'H'.
// anyone could remove an unused variable.
//  Using object option 2
// Enums ==> best option
// anyone could remove an unused variable.

// 2. Source of data is hardcoded.
// If we change the file reading logic, then all the code will become useless
// Also the logic is reusable by other services.
// So we will abstract that logic out.

// 3. Data array is all strings, even though it might have numbers in it.
// type assertion --> creating a tuple

// 4. Variable named after a specific team.

// 5. Analysis type is fixed.

// 6. No ability to output the report in different formats.


// csvFileReader should not have logic related to conversion for creating 
// match data
// csvFileReader(abstract class) == read(), mapRow() --> abstract method
// matchReader ==> mapRow(string[]): matchData
// movieReader ==> mapRow(string[]): movieData

// we will use generics in csvFileReader
// because mapRow can return type depending on the child class
// generics are just like parameters for classes
// abstract mapRow(row: string[]): T;