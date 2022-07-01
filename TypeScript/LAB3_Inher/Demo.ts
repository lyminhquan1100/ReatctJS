import {a, printWorker, printWorker3, Worker} from "./Worker"

 var worker1 = new Worker(10, "Worker1" , 30 , "Male" );
 var worker2 = new Worker(11, "Worker2" , 30 , "Male" );
 var worker3 = new Worker(12, "Worker3" , 30 , "Male" );
 var worker4 = new Worker(13, "Worker4" , 30 , "Male" );

 console.log("Thong tin cua Worker1: ");
 worker1.printInfoWorker();
//Tao mang du lieu luu cac Worker dung trong chuong trinh
 var workerArray: Worker[];
 workerArray = [worker1, worker2, worker3, worker4];
 console.log("------------Thong tin worker tren he thong------------");
 workerArray.forEach((worker)=> {
    worker.printInfoWorker();
 });

 //su dung for of, for in
 for (const worker of workerArray) {
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
 
 
workerSet.forEach(element => {
    console.log(element);
});

console.log("==============FUNCTION=============");
printWorker(worker1)
a(worker2);
printWorker3(worker3)