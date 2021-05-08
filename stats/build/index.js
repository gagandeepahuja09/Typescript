"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var matches = fs_1.default
    .readFileSync('football.csv', {
    encoding: 'utf-8'
})
    .split('\n')
    .map(function (row) { return row.split(','); });
var manUnitedWins = 0;
matches.forEach(function (match) {
    manUnitedWins += +((match[1] === 'Man United' && match[5] === 'H')
        || (match[2] === 'Man United' && match[5] === 'A'));
});
console.log("Man united won " + manUnitedWins + " games");
