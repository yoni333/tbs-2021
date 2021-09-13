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
exports.ErrorData = exports.ErrorActionEnum = void 0;
var ErrorActionEnum;
(function (ErrorActionEnum) {
    ErrorActionEnum[ErrorActionEnum["dbLog"] = 1] = "dbLog";
    ErrorActionEnum[ErrorActionEnum["stopAll"] = 2] = "stopAll";
})(ErrorActionEnum = exports.ErrorActionEnum || (exports.ErrorActionEnum = {}));
var ErrorData = /** @class */ (function (_super) {
    __extends(ErrorData, _super);
    function ErrorData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ErrorData.error = function (e) {
        console.error(e.message, e.class, e.caller, e.action);
    };
    return ErrorData;
}(Error));
exports.ErrorData = ErrorData;
