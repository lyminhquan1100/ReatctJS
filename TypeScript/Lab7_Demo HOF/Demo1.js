function sum(a, b) {
    return a + b;
}
function minus(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
//Phep cong
var sum_a_b = sum(30, 20);
console.log("Ket qua phep cong 2 so la: ", sum_a_b);
//Phep tru
var minus_a_b = minus(30, 20);
console.log("Ket qua phep tru hai so la: ", minus_a_b);
function caculate(aParam, bParam, functionParam) {
    var result = functionParam(aParam, bParam);
    console.log("ket qua cua phep tinh ban can la: ", result);
}
console.log("=========Demo HOF========");
console.log("Ket qua cua phep cong 2 so la: ");
caculate(30, 20, sum);
console.log("Ket qua cua phep tru 2 so la: ");
caculate(30, 20, minus);
