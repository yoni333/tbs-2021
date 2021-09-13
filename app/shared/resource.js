"use strict";
// based on answer https://stackoverflow.com/questions/39701524/using-enum-as-interface-key-in-typescript
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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resources = exports.EResource = void 0;
var data_1 = require("./data");
var EResource;
(function (EResource) {
    EResource["food"] = "food";
    EResource["wood"] = "wood";
    EResource["iron"] = "iron";
    EResource["stone"] = "stone";
    EResource["silver"] = "silver";
    EResource["gold"] = "gold";
    EResource["coal"] = "coal";
    EResource["magicPowder"] = "magicPowder";
})(EResource = exports.EResource || (exports.EResource = {}));
;
function zeroResources() {
    return {
        food: 0,
        wood: 0,
        iron: 0,
        stone: 0,
        silver: 0,
        gold: 0,
        coal: 0,
        magicPowder: 0,
    };
}
var Resources = /** @class */ (function (_super) {
    __extends(Resources, _super);
    function Resources(resources) {
        var _this = _super.call(this, data_1.ClassTypes.Resources) || this;
        _this._resources = __assign(__assign({}, zeroResources()), resources);
        return _this;
    }
    Object.defineProperty(Resources.prototype, "resources", {
        get: function () {
            return this._resources;
        },
        enumerable: false,
        configurable: true
    });
    return Resources;
}(data_1.Data));
exports.Resources = Resources;
