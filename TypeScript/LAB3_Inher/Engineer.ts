import { Staff } from "./Staff";

class Engineer extends Staff{
    private specialized: string;

	constructor(specialized: string, name: string, age: number, sex: string) {
		super(name, age, sex);
        this.specialized = specialized;
	}

	public getSpecialized(): string {
		return this.specialized;
	}

	public setSpecialized(value: string) {
		this.specialized = value;
	}
}
export{ Engineer }