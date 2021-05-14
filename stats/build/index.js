"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
var matchReader = MatchReader_1.MatchReader.readCsv('football.csv');
var matchSummary = Summary_1.Summary.winsReportHtml('Man United');
matchReader.load();
matchSummary.buildAndPrintReport(matchReader.matches);
