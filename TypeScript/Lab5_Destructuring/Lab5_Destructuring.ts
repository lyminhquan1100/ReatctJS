let accoun2 ={
    name: "quanlm",
    age: 20,
    gender: "Nam",
    address: "QN",
};
// let accoun3 ={
//     name: "quanlm",
//     age: 20,
//     gender: "Nam",
//     address: "QN",
//     rank:10,
// };


//spread
let account3={
    ...accoun2,
    rank:12,
};

console.log(account3);

let{name: v_name,age: v_age, gender:v_gender,address:v_address} = accoun2;

console.log("Gia tri cua v_name",v_name);
console.log("Gia tri cua v_age",v_age);
console.log("Gia tri cua v_gender",v_gender);
console.log("Gia tri cua v_address",v_address);


const namex: String[] =["Son","nhat","Quan"];
// let trainee1 = namex[0];
// let trainee2 = namex[1];
// let trainee3 = namex[2];
let [trainee1,trainee2,trainee3] = namex;

let nameplus: String[] =[...namex,"Yen"];
console.log(nameplus);

