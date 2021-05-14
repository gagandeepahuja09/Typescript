"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalysis = void 0;
var MatchResult_1 = require("../MatchResult");
// implements will tell typescript to check if we are correctly implementing
// all the properties of the interface
var WinsAnalysis = /** @class */ (function () {
    function WinsAnalysis(team) {
        this.team = team;
    }
    WinsAnalysis.prototype.run = function (matches) {
        var _this = this;
        var wins = 0;
        matches.forEach(function (match) {
            wins += +((match[1] === _this.team && match[5] === MatchResult_1.MatchResult.HomeWin)
                || (match[2] === _this.team && match[5] === MatchResult_1.MatchResult.AwayWin));
        });
        return this.team + " won " + wins + " games";
    };
    return WinsAnalysis;
}());
exports.WinsAnalysis = WinsAnalysis;
