var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var accoun2 = {
    name: "quanlm",
    age: 20,
    gender: "Nam",
    address: "QN"
};
// let accoun3 ={
//     name: "quanlm",
//     age: 20,
//     gender: "Nam",
//     address: "QN",
//     rank:10,
// };
//spread
var account3 = __assign(__assign({}, accoun2), { rank: 12 });
console.log(account3);
var v_name = accoun2.name, v_age = accoun2.age, v_gender = accoun2.gender, v_address = accoun2.address;
console.log("Gia tri cua v_name", v_name);
console.log("Gia tri cua v_age", v_age);
console.log("Gia tri cua v_gender", v_gender);
console.log("Gia tri cua v_address", v_address);
var namex = ["Son", "nhat", "Quan"];
// let trainee1 = namex[0];
// let trainee2 = namex[1];
// let trainee3 = namex[2];
var trainee1 = namex[0], trainee2 = namex[1], trainee3 = namex[2];
var nameplus = __spreadArray(__spreadArray([], namex, true), ["Yen"], false);
console.log(nameplus);
