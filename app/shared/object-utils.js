"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTwice = exports.assignData = void 0;
function assignData(Data) {
    for (var _i = 0, _a = Object.entries(Data); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        this[key] = value;
    }
}
exports.assignData = assignData;
function isTwice(arr, key) {
    var result = { isValid: true, message: "" };
    var memo = {};
    arr.forEach(function (value) {
        if (memo[value[key]] !== undefined) {
            result.isValid = false;
            // we return as message the problematic value
            result.message = value[key];
        }
    });
    return result;
}
exports.isTwice = isTwice;
