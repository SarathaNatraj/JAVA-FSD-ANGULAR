class Person{
    name:string;
    readonly age:number;
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }

    greet():string{
        return `Hello my name is ${this.name} and i am ${this.age} years old`;
    }
}

const p1= new Person("Naveen", 25);
console.log(p1.greet());
//p1.age=22; cannot change the value, b'coz age is declared as readonly
console.log(p1.age);