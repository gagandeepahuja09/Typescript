"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// we will need to install type definition file for standard node packages as well
// npm i @types/node
var WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
var CsvFileReader_1 = require("./CsvFileReader");
var MatchReader_1 = require("./MatchReader");
var HtmlReport_1 = require("./reportTargets/HtmlReport");
var Summary_1 = require("./Summary");
var csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
var matchSummary = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis('Man United'), new HtmlReport_1.HtmlReport('report.html'));
matchSummary.buildAndPrintReport(matchReader.matches);
