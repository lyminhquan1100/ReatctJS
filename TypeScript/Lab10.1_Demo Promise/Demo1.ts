let promise = new Promise(function (resolve, reject) {
  //Call API de xu ly 1 yeu cau nao day
  //Ajax
  //
  let response = false;
  if (response) {
    reject("Email ton tai roi");
  } else {
    resolve("Chua ton tai dau, lam tiep di");
  }
});

promise.then(
  function (mes) {
    console.log(mes, "Tao Username"); //resolve
  },
  function (mes) {
    console.log("Dung chuong trinh", mes); //reject
  }
);
