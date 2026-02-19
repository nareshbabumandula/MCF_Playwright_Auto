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
var Bike = /** @class */ (function () {
    function Bike() {
    }
    // concrete method or non abstarct method or method with implemenatiotion/body
    Bike.prototype.discBrake = function () {
        console.log("Bike has disc brake");
    };
    return Bike;
}());
// child class 
var yamaha = /** @class */ (function (_super) {
    __extends(yamaha, _super);
    function yamaha() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    yamaha.prototype.run = function () {
        console.log("Yamaha bike is running");
    };
    return yamaha;
}(Bike));
// create object of child class
var bike = new yamaha();
bike.run();
bike.discBrake();
