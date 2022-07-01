class Staff{
//thuoc tinh
private name: string;
private age: number;
private sex: string;

	constructor(name: string, age: number, sex: string) {
		this.name = name;
		this.age = age;
		this.sex = sex;
	}

	public getName(): string {
		return this.name;
	}

	public getAge(): number {
		return this.age;
	}

	public getSex(): string {
		return this.sex;
	}

	public setName(value: string) {
		this.name = value;
	}

	public setAge(value: number) {
		this.age = value;
	}

	public setSex(value: string) {
		this.sex = value;
	}
}

export{ Staff}