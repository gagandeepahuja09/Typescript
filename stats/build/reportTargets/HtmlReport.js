"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlReport = void 0;
var fs_1 = __importDefault(require("fs"));
var HtmlReport = /** @class */ (function () {
    function HtmlReport(filePath) {
        this.filePath = filePath;
    }
    HtmlReport.prototype.print = function (report) {
        var html = "\n      <html>\n        <h2>Analysis Report</h2>\n        <div>" + report + "</div>\n      </html>\n    ";
        fs_1.default.writeFileSync(this.filePath, html);
    };
    return HtmlReport;
}());
exports.HtmlReport = HtmlReport;
