"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// we will need to install type definition file for standard node packages as well
// npm i @types/node
var WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
var CsvFileReader_1 = require("./CsvFileReader");
var MatchReader_1 = require("./MatchReader");
var ConsoleReport_1 = require("./reportTargets/ConsoleReport");
var Summary_1 = require("./Summary");
var csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
var winsAnalyzer = new WinsAnalysis_1.WinsAnalysis('Man United');
var consoleReport = new ConsoleReport_1.ConsoleReport();
var matchSummary = new Summary_1.Summary(winsAnalyzer, consoleReport);
matchSummary.buildAndPrintReport(matchReader.matches);
