export class Employee {
    public name:string;
    salary?:number;
    department:string;

    constructor(name:string, department:string,salary?:number) {
        this.name=name;
        this.salary=salary;
        this.department=department;
        
    }

    getDetails():string{
        return `${this.name} works on ${this.department}`;
    }
}