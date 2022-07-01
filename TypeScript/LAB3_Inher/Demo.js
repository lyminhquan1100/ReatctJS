"use strict";
exports.__esModule = true;
var Worker_1 = require("./Worker");
var worker1 = new Worker_1.Worker(10, "Worker1", 30, "Male");
var worker2 = new Worker_1.Worker(11, "Worker2", 30, "Male");
var worker3 = new Worker_1.Worker(12, "Worker3", 30, "Male");
var worker4 = new Worker_1.Worker(13, "Worker4", 30, "Male");
console.log("Thong tin cua Worker1: ");
worker1.printInfoWorker();
//Tao mang du lieu luu cac Worker dung trong chuong trinh
var workerArray;
workerArray = [worker1, worker2, worker3, worker4];
console.log("------------Thong tin worker tren he thong------------");
workerArray.forEach(function (worker) {
    worker.printInfoWorker();
});
//su dung for of, for in
for (var _i = 0, workerArray_1 = workerArray; _i < workerArray_1.length; _i++) {
    var worker = workerArray_1[_i];
    worker.printInfoWorker();
}
//Set
var workerSet = new Set();
workerSet.add(worker1);
workerSet.add(worker2);
workerSet.add(worker3);
workerSet.add(worker4);
console.log("Demo SET");
console.log("SO phan tu trong set: ", workerSet.size);
workerSet.forEach(function (element) {
    console.log(element);
});
console.log("==============FUNCTION=============");
(0, Worker_1.printWorker)(worker1);
(0, Worker_1.a)(worker2);
(0, Worker_1.printWorker3)(worker3);
