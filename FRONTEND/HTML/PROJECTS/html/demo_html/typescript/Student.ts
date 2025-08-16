interface Person {
  name: string;
  age: number;
  greet(): void;
}

class Student implements Person {
  constructor(public name: string, public age: number) {}
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
}
