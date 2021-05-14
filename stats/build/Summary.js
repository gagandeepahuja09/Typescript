"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
var WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
var HtmlReport_1 = require("./reportTargets/HtmlReport");
var Summary = /** @class */ (function () {
    function Summary(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    Summary.winsReportHtml = function (team) {
        var filePath = team + "_report.html";
        return new Summary(new WinsAnalysis_1.WinsAnalysis('Man United'), new HtmlReport_1.HtmlReport(filePath));
    };
    Summary.prototype.buildAndPrintReport = function (matches) {
        var output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    };
    return Summary;
}());
exports.Summary = Summary;
