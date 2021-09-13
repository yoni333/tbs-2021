"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.City = exports.CityValidators = void 0;
var data_1 = require("../shared/data");
var error_1 = require("../shared/error");
var object_utils_1 = require("../shared/object-utils");
var CityValidators = /** @class */ (function () {
    function CityValidators() {
    }
    CityValidators.districtValidator = function (districts) {
        var result = (0, object_utils_1.isTwice)(districts, 'position');
        if (!result.isValid)
            result.message = "district number " + result.message + " is created more then once";
        return result;
    };
    return CityValidators;
}());
exports.CityValidators = CityValidators;
var City = /** @class */ (function (_super) {
    __extends(City, _super);
    function City(data) {
        return _super.call(this, data_1.ClassTypes.city, data) || this;
    }
    City.prototype.addDistricts = function (districts) {
        var _a;
        var _b = CityValidators.districtValidator(__spreadArray(__spreadArray([], this._data.districts, true), districts, true)), isValid = _b.isValid, message = _b.message;
        if (isValid) {
            (_a = this._data.districts).push.apply(_a, districts);
        }
        else {
            this.error({ message: message, caller: 'addDistrict', action: error_1.ErrorActionEnum.dbLog });
        }
    };
    return City;
}(data_1.Data));
exports.City = City;
