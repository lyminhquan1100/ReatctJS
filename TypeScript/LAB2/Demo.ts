// tao ra 1 so doi tuong Department

import { Department, printInforDep, myname} from "./Deparment";

var department1 = new Department(1, "Sale");
var department2 = new Department(2, "Maketing");
var department3 = new Department(3, "BOD");
var department4 = new Department(4, "Ky thuat");

console.log('Thong tin phong ban so 1: ');
department1.printInfo();

console.log("Thong tin phong ban so 2?: ");
printInforDep(department2);
console.log("Chuong trinh nay duoc viet boi", myname);


