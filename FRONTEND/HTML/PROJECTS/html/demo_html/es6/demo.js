// ES6 Features Demo in One File

// 1. let and const
const PI = 3.14159;
let radius = 5;

// 2. Template Literals
console.log(`The area of a circle with radius ${radius} is ${PI * radius ** 2}`);

// 3. Arrow Functions
const square = x => x * x;
console.log(`Square of 4 is ${square(4)}`);

// 4. Default Parameters
function greet(name = 'Guest') {
  console.log(`Hello, ${name}!`);
}
greet();
greet('Pragati');


// 7. Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2);

// 8. Rest Parameters
function sum(...nums) {
  return nums.reduce((acc, n) => acc + n, 0);
}
console.log(`Sum: ${sum(1, 2, 3, 4)}`);

// 9. Object Literal Enhancements
const fruit = 'apple';
const count = 10;
const basket = { fruit, count };
console.log(basket);

// 10. Classes
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}
const dog = new Animal('Dog');
dog.speak();

// 11. Inheritance
class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}
const d = new Dog('Buddy');
d.speak();

// 12. Promises
const asyncTask = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Task done!'), 1000);
});
asyncTask.then(result => console.log(result));

// 13. Modules (if used in a module system or Node with ES6 modules)
// export const add = (a, b) => a + b;
// import { add } from './math.js'; // Usage shown here for reference

// 14. For...of Loop
const nums = [10, 20, 30];
for ( n of nums) {
  console.log(n);
}

// 15. Map and Set
const myMap = new Map();
myMap.set('a', 1);
myMap.set('b', 2);
console.log(myMap.get('a'));

const mySet = new Set([1, 2, 2, 3]);
console.log([...mySet]);


// 16. Optional Chaining and Nullish Coalescing
const user = { profile: { email: null } };
console.log(user?.profile?.email ?? 'Email not provided');
