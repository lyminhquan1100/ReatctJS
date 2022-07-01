import { Staff } from "./Staff";

class Worker extends Staff{
    private rank: number;


	constructor(rank: number, name: string, age: number, sex: string) {
		super(name, age, sex);
        this.rank = rank;
	}

	public getRank(): number {
		return this.rank;
	}

	public setRank(value: number) {
		this.rank = value;
	}
	 printInfoWorker(): void {
		console.log("Name: ",super.getName(),"Rank: ", this.rank, "Age: ", super.getAge(), "Sex: ", super.getSex());
	}
}
// Viet ham de in thong tin cua Worker
function printWorker(worker: Worker): void {
	console.log("Name: ",worker.getName(),"Rank: ", worker.getRank() );
	
}
//cach 2
var a = function printWorker2(worker: Worker): void {
	console.log("Name: ",worker.getName(),"Rank: ", worker.getRank() );
	
}
//cach 3: Arrow Function
var printWorker3 = (worker: Worker)=>{
	console.log("Name: ",worker.getName(),"Rank: ", worker.getRank() );
	
}
export {Worker, printWorker,a,printWorker3}