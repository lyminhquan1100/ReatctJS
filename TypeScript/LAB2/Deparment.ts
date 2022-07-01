class Department {
    //Khai bao ra cac thuoc tinh
    private id: number;
    private name: string;

    // Ham contructor
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
    // Ha  getter setter
    public getid(): number{
        return this.id;
    }

    public setid(id: number){
        this.id = id;
    }
    // Ha  getter setter
    public getname(): string{
        return this.name;
    }

    public setname(name: string){
        this.name = name;
    }
    // printinfo
    printInfo() {
        console.log("ID: ", this.id,"Name: ",this.name);           
    }
}
//
var myname: String = "LMQ";
function printInforDep(department:Department) {
   console.log(department.getid(),  "      " , department.getname);
}

export{Department, printInforDep, myname};