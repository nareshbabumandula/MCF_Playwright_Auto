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
var bike_1 = require("./bike");
var yahama = /** @class */ (function (_super) {
    __extends(yahama, _super);
    function yahama() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    yahama.prototype.start = function () {
        console.log("yahama bike has started");
    };
    yahama.prototype.run = function () {
        console.log("yahama bike is runninhg");
    };
    return yahama;
}(bike_1.Bike));
var bike = new yahama();
bike.discBrake();
bike.run();
