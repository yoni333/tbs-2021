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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CityDetails = exports.MapLocation = void 0;
var data_1 = require("../shared/data");
var MapLocation = /** @class */ (function (_super) {
    __extends(MapLocation, _super);
    function MapLocation(data) {
        return _super.call(this) || this;
    }
    return MapLocation;
}(data_1.Data));
exports.MapLocation = MapLocation;
var CityDetails = /** @class */ (function (_super) {
    __extends(CityDetails, _super);
    function CityDetails(data) {
        var _this = _super.call(this, data_1.ClassTypes.CityDetails) || this;
        _this._data = data;
        return _this;
    }
    return CityDetails;
}(data_1.Data));
exports.CityDetails = CityDetails;
