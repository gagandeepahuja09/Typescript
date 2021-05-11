"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// we will need to install type definition file for standard node packages as well
// npm i @types/node
var CsvFileReader_1 = require("./CsvFileReader");
var MatchReader_1 = require("./MatchReader");
var MatchResult_1 = require("./MatchResult");
var csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
var manUnitedWins = 0;
// we could also use object, but they are not meant for that purpose
// they are meant for storing records. + enums can be used as a type in typescript
// we can return a MatchResult & use in TS
// behind the scenes, an object is created
// Primary goal is to signal other engineers that these are all closely related values
matchReader.matches.forEach(function (match) {
    manUnitedWins += +((match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.HomeWin)
        || (match[2] === 'Man United' && match[5] === MatchResult_1.MatchResult.AwayWin));
});
console.log("Man united won " + manUnitedWins + " games");
