// Check Email Exist
function callAPICheckEmail() {
    let promiseCheckEmail = new Promise(function (resolve, reject) {
        console.log("Call API CHECK EMAIL!");
        //
        //Ajax
        //
        var response = false;
        if (response) {
            reject("Email da ton tai");
        }
        else {
            resolve("Email chua ton tai, Check Email OK");
        }
    });
    return promiseCheckEmail;
}
//Check Username Exist
function callAPICheckUsername() {
    let promiseCheckUsername = new Promise(function (resolve, reject) {
        console.log("Call API CHECK Username!");
        //
        //Ajax
        //
        var response = false;
        if (response) {
            reject("Username da ton tai");
        }
        else {
            resolve("Username chua ton tai, Check Username OK");
        }
    });
    return promiseCheckUsername;
}
//Creat Account
function callAPICreateAccount() {
    let promiseCheckCreateAccount = new Promise(function (resolve, reject) {
        console.log("Call API CHECK CreateAccount!");
        //
        //Ajax
        //
        var response = "Success"; //Error
        if (response == "Error") {
            reject("Da co loi xay ra");
        }
        else {
            resolve("Tao moi thanh cong");
        }
    });
    return promiseCheckCreateAccount;
}
//Goi ham
// call APIC...
callAPICheckEmail()
    .then(function (mes) {
    //resolve tra ve thanh cong, chua co'
    return callAPICheckUsername();
})
    .then(function (mes) {
    return callAPICreateAccount();
})
    .then(function (mes) {
    console.log(mes);
})
    .catch(function (mes) {
    console.log(mes);
});
