// Check Email Exist
function callAPICheckEmail_() {
  console.log("Call API CHECK EMAIL!");
  //
  //Ajax
  //
  var response = false;

  return response;
}

//Check Username Exist
function callAPICheckUsername_() {
  console.log("Call API CHECK Username!");
  //
  //Ajax
  //
  var response = false;

  return response;
}

//Creat Account
function callAPICreateAccount_() {
  console.log("Call API CHECK CreateAccount!");
  //
  //Ajax
  //
  var response = "Success"; //Error
  if (response == "Error") {
    return false;
  } else {
    return true;
  }
}

async function Create_New_Account() {

//Check Email
 let resultCheckEmail = await callAPICheckEmail_();
 if(resultCheckEmail){
    console.log("Email da ton tai");
    return;
 } else{
    console.log("Email chua ton tai, Check Email OK!");
 }

 //Check Username
 let resultCheckUsername = await callAPICheckUsername_();
 if(resultCheckUsername){
    console.log("Username da ton tai");
    return;
 } else{
    console.log("Username chua ton tai, Check Email OK!");
 }

 // Create Account
 let resultCreateAccount =  await callAPICreateAccount_();
 if(resultCreateAccount){
    console.log("Da co loi xay ra");
    return;
 } else{
    console.log("Tao moi thang cong");
 }
}

Create_New_Account();
