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

// Enums
// we could also use object, but they are not meant for that purpose
// they are meant for storing records. + enums can be used as a type in typescript
// we can return a MatchResult & use in TS
// behind the scenes, an object is created
// Primary goal is to signal other engineers that these are all closely related values


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

// This was inheritance approach
// Now we will discuss the alternative approach: Composition
// Relies on interfaces
// Earlier MatchReader was a child class of CsvFileReader
// Now MatchReader would have a reader property which would specify which kind of
// DataReader we want to use(eg. CsvFileReader / ApiReader, etc)
// DataReader will be an interface ==> read(): void, data: string[][]
// In composition approach, we delegated the responsibility of reading to the 
// dataReader

// Inheritance V/S Composition
// Inheritance uses ==> is-a relationship ==> MatchReader is a CsvFileReader
// Composition uses ==> has-a relationship ==> MatchReader has a reference to CsvFileReader

// When should we use composition?
// When we are not sure of what the parent class is going to be
// Then the reference can be stored in composition and responsibility can be given
// to the referenced class

// EXAMPLE
// How to model a window?
// height, width, open --> (boolean), toggleOpen(), area()
// Wall ==> height, width, color, area()
// For reusability we can create a parent class called Rectangle
// But the problem is that a window could be circle also.
// Then we would have to create 2 classes ==> Duplicate code for open and toggleOpen

// Composition Way
// Interface Dimension ==> Must have area function
// Both classes Wall & Window will have a dimension property specifying 
// whether a Rectangle or Window
// And the area functionality will be delegated to that dimension

// So for MatchReader also, a better approach would be to use composition
// as we can easily swap out and use instance of ApiReader as dataReader for MatchReader later without doing much code changes.


// **** DESIGN FOR ANALYSIS AND REPORTING ****
// interface Analyzer
// run(matches: MatchData[]): string

// classes which implement Analyzer ==> AverageGoalWinsAnalysis, WinsAnalysis

// interface OutputTarget ==> print(report: string): void
// classes which implement OutputTarget ==> ConsoleReport, HtmlReport

// class MatchSummary
// analyzer: Analyzer
// outputTarget: OutputTarget
// We are going to pass here instances of analyzer and outputTarget
// buildAndPrintReport(MatchData[])

// While implementing classes of an interface, import the interface and use the implements keyword
// Completed this composition flow