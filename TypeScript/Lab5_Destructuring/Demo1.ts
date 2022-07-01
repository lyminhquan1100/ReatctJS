//default params la user
function showInfo(name: String ="user") {
    console.log("ten toi la: ",name);
}

showInfo("LMQuan")

//rest Parameter
function name22(...trainee) {
    console.log("Hello: ", trainee);
}
name22("Quan","Minh");
name22("Quan","Minh","abc");
name22("Quan","Minh","Nam","Vinh");

