"use strict";
// Interface to tell other classes for how to be eligible for sorting
// The class should have the following properties: length, compare and swap methods
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
// note that this is shorthand for declaring separately and then
// initializing using this keyword
// constructor(public collection: Sortable) {
// }
var Sorter = /** @class */ (function () {
    function Sorter() {
    }
    Sorter.prototype.sort = function () {
        var length = this.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
