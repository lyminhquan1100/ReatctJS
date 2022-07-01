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
exports.__esModule = true;
exports.printWorker3 = exports.a = exports.printWorker = exports.Worker = void 0;
var Staff_1 = require("./Staff");
var Worker = /** @class */ (function (_super) {
    __extends(Worker, _super);
    function Worker(rank, name, age, sex) {
        var _this = _super.call(this, name, age, sex) || this;
        _this.rank = rank;
        return _this;
    }
    Worker.prototype.getRank = function () {
        return this.rank;
    };
    Worker.prototype.setRank = function (value) {
        this.rank = value;
    };
    Worker.prototype.printInfoWorker = function () {
        console.log("Name: ", _super.prototype.getName.call(this), "Rank: ", this.rank, "Age: ", _super.prototype.getAge.call(this), "Sex: ", _super.prototype.getSex.call(this));
    };
    return Worker;
}(Staff_1.Staff));
exports.Worker = Worker;
// Viet ham de in thong tin cua Worker
function printWorker(worker) {
    console.log("Name: ", worker.getName(), "Rank: ", worker.getRank());
}
exports.printWorker = printWorker;
//cach 2
var a = function printWorker2(worker) {
    console.log("Name: ", worker.getName(), "Rank: ", worker.getRank());
};
exports.a = a;
//cach 3: Arrow Function
var printWorker3 = function (worker) {
    console.log("Name: ", worker.getName(), "Rank: ", worker.getRank());
};
exports.printWorker3 = printWorker3;
