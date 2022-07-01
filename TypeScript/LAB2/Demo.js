"use strict";
// tao ra 1 so doi tuong Department
exports.__esModule = true;
var Deparment_1 = require("./Deparment");
var department1 = new Deparment_1.Department(1, "Sale");
var department1 = new Deparment_1.Department(2, "Maketing");
var department1 = new Deparment_1.Department(3, "BOD");
var department1 = new Deparment_1.Department(4, "Ky thuat");
console.log('Thong tin phong ban so 1: ');
department1.printInfo();
