function multiply(a, b, c) {
  return a * b * c;
}
//curing Function
function multiplyCurring(a) {
  return (b) => {
    return (c) => {
      return a * b * c;
    };
  };
}

let multiplyCurring_arrow = (a) => (b) => (c) => a * b * c;

//Goi Curring Function
// 1,2,3
let multiplyCurring_1 = multiplyCurring(1);
let multiplyCurring_2 = multiplyCurring_1(2);
let resultCurring = multiplyCurring_2(3);
console.log("ket qua su dung curring: ", resultCurring);

//log
console.log("Ket qua 1: ", multiply(1, 2, 3));
console.log("Ket qua 2: ", multiply(1, 2, 4));
console.log("Ket qua 3: ", multiply(1, 2, 5));
