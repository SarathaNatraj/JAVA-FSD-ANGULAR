interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;

 // greet():void;
}

const user12: User = {
  id: 101,
  name: "Alice",
  email: "alice@example.com",
  isActive: true,
};

function greetUser1(user: User): void {
  console.log(`Hello, ${user.name}!`);
}

greetUser1(user12);
