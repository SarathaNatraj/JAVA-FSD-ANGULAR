import { Employee } from "./employee";

class Manager extends Employee {
    constructor(name:string,department:string,salary?:number,){
        super(name,department,salary);
    }
    showDepartment():string{
        return `${this.name} manages ${this.department}`;
    }
}

const m1 = new Manager("Abhishek",  "IT", 50000);
console.log(m1.getDetails());
console.log(m1.showDepartment());
console.log(m1.name);
console.log(m1.salary);
const m2 = new Manager("Abhijeet", "IT");
console.log(m2.getDetails());
