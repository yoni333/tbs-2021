"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Data = exports.ClassTypes = void 0;
var error_1 = require("./error");
var ClassTypes;
(function (ClassTypes) {
    // do not make changes to this list - without make DB normalization.
    // you can only add to this list with out DB normalization
    ClassTypes[ClassTypes["Metadata"] = 2] = "Metadata";
    ClassTypes[ClassTypes["city"] = 10] = "city";
    ClassTypes[ClassTypes["CityDetails"] = 11] = "CityDetails";
    ClassTypes[ClassTypes["CityDistrict"] = 12] = "CityDistrict";
    ClassTypes[ClassTypes["Resources"] = 13] = "Resources";
})(ClassTypes = exports.ClassTypes || (exports.ClassTypes = {}));
var Data = /** @class */ (function () {
    function Data(type, data) {
        this._type = type;
        this._data = data;
    }
    Object.defineProperty(Data.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Data.prototype, "type", {
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    Data.prototype.error = function (_a) {
        var message = _a.message, action = _a.action, caller = _a.caller;
        error_1.ErrorData.error({ message: message, caller: caller, class: this.type, action: action });
    };
    return Data;
}());
exports.Data = Data;
