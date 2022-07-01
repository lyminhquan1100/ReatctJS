"use strict";
exports.__esModule = true;
exports.Department = void 0;
var Department = /** @class */ (function () {
    // Ham contructor
    function Department(id, name) {
        this.id = id;
        this.name = name;
    }
    // Ha  getter setter
    Department.prototype.getid = function () {
        return this.id;
    };
    Department.prototype.setid = function (id) {
        this.id = id;
    };
    // Ha  getter setter
    Department.prototype.getname = function () {
        return this.name;
    };
    Department.prototype.setname = function (name) {
        this.name = name;
    };
    // printinfo
    Department.prototype.printInfo = function () {
        console.log("ID: ", this.id, "Name: ", this.name);
    };
    return Department;
}());
exports.Department = Department;
