function sum1(a: number, b:number){
    return a+b;
}

function minus1(a: number, b: number) {
    return a-b;
}

function multiply2(a: number, b:number){
    return a*b;
}

//Phep cong
let sum_a_b1 = sum1(30,20);
console.log("Ket qua phep cong 2 so la: ", sum_a_b1);

//Phep tru
let minus_a_b1 = minus1(30,20);
console.log("Ket qua phep tru hai so la: ", minus_a_b1);

function caculate1(aParam: number, bParam: number, functionParam){
   let result = functionParam(aParam, bParam);
   console.log("ket qua cua phep tinh ban can la: ", result);
}

console.log("=========Demo HOF========");
console.log("Ket qua cua phep cong 2 so la: ");
caculate1(30,20,sum1);
console.log("Ket qua cua phep tru 2 so la: ");
caculate1(30,20,minus1)


