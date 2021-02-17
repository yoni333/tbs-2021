// based on answer https://stackoverflow.com/questions/39701524/using-enum-as-interface-key-in-typescript
(function (EResource) {
    EResource[EResource["food"] = 'food'] = "food";
    EResource[EResource["wood"] = 'wood'] = "wood";
    EResource[EResource["iron"] = 'iron'] = "iron";
    EResource[EResource["stone"] = 'stone'] = "stone";
    EResource[EResource["silver"] = 'silver'] = "silver";
    EResource[EResource["gold"] = 'gold'] = "gold";
    EResource[EResource["coal"] = 'coal'] = "coal";
    EResource[EResource["magicPowder"] = 'magicPowder'] = "magicPowder";
})(exports.EResource || (exports.EResource = {}));
var EResource = exports.EResource;
;
var Resource = (function () {
    function Resource(resources) {
        this.food = 0;
        this.wood = 0;
        this.iron = 0;
        this.stone = 0;
        this.silver = 0;
        this.gold = 0;
        this.coal = 0;
        this.magicPowder = 0;
        this.initVars(resources);
    }
    Resource.prototype.initVars = function (resources) {
        for (var _i = 0, _a = Object.entries(resources); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            this[key] = value;
        }
    };
    return Resource;
})();
var r = new Resource({ food: 100 });
console.log(r);
