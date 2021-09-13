"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUID = void 0;
var uuid_1 = require("uuid");
var createUID = function () {
    return (0, uuid_1.v4)();
};
exports.createUID = createUID;
