function multiply1(a, b, c) {
    return a * b * c;
}
//curing Function
function multiplyCurring(a) {
    return function (b) {
        return function (c) {
            return a * b * c;
        };
    };
}
//Goi Curring Function
// 1,2,3
var multiplyCurring_1 = multiplyCurring(1);
var multiplyCurring_2 = multiplyCurring_1(2);
var resultCurring = multiplyCurring_2(3);
console.log("ket qua su dung curring: ", resultCurring);
//log
console.log("Ket qua 1: ", multiply1(1, 2, 3));
console.log("Ket qua 2: ", multiply1(1, 2, 4));
console.log("Ket qua 3: ", multiply1(1, 2, 5));
