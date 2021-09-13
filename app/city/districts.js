"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.District = exports.ECityDistrictsNames = exports.ECityDistricts = void 0;
var metadata_1 = require("../shared/metadata");
var object_utils_1 = require("../shared/object-utils");
var ECityDistricts;
(function (ECityDistricts) {
    ECityDistricts["palace"] = "palace";
    ECityDistricts["tradeYard"] = "trade";
    ECityDistricts["military"] = "military";
    ECityDistricts["mage"] = "mage";
    ECityDistricts["academic"] = "academic";
    ECityDistricts["farms"] = "farms";
    ECityDistricts["mines"] = "mines";
})(ECityDistricts = exports.ECityDistricts || (exports.ECityDistricts = {}));
var ECityDistrictsNames;
(function (ECityDistrictsNames) {
    ECityDistrictsNames["palace"] = "The palace";
    ECityDistrictsNames["tradeYard"] = "The Trade Area ";
    ECityDistrictsNames["military"] = "The Military Camp";
    ECityDistrictsNames["mage"] = "The mage lab";
    ECityDistrictsNames["academic"] = "The Academic Area";
    ECityDistrictsNames["farms"] = "The Farms";
    ECityDistrictsNames["mines"] = "The Mines";
})(ECityDistrictsNames = exports.ECityDistrictsNames || (exports.ECityDistrictsNames = {}));
var District = /** @class */ (function () {
    function District(data) {
        this.metadata = new metadata_1.Metadata();
        this.filledBy = [];
        object_utils_1.assignData.apply(this, data);
    }
    return District;
}());
exports.District = District;
