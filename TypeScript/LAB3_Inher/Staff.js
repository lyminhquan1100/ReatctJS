"use strict";
exports.__esModule = true;
exports.Staff = void 0;
var Staff = /** @class */ (function () {
    function Staff(name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
    Staff.prototype.getName = function () {
        return this.name;
    };
    Staff.prototype.getAge = function () {
        return this.age;
    };
    Staff.prototype.getSex = function () {
        return this.sex;
    };
    Staff.prototype.setName = function (value) {
        this.name = value;
    };
    Staff.prototype.setAge = function (value) {
        this.age = value;
    };
    Staff.prototype.setSex = function (value) {
        this.sex = value;
    };
    return Staff;
}());
exports.Staff = Staff;
