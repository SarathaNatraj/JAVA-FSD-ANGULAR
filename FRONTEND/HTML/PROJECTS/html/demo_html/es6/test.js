// 5. Destructuring Assignment
let person = { name1: 'Alice', age: 30, isVote:true }; //object constructing
let { name1,  isVote,age } = person;
console.log(`${name1} is ${age} years old. allow voting : ${isVote}`);

// 6. Array Destructuring
const rgb = [255, 100, 80];
const [r, g, b] = rgb;
console.log(`Red: ${r}, Green: ${g}, Blue: ${b}`);

class Employee{
    constructor(id,name,email){
        this.id=id;
        this.name=name;
        this.email=email;
    }

    printDetails(){
  console.log(` this emp has ${this.id} having ${this.name}  at this ${this.email}`)
    
    }
}
const empArr = [];
let e = new Employee(101,'Alice', 'alice@gmail.com');

let e1 = new Employee(102,'Alice', 'sas@gmail.com');
empArr.push(e);
empArr.push(e1);
//empArr[1]=e1;
//array destructing
const[e2,e3] = empArr;
//object destructing
let{id,name,email} = e2;

console.log(id+" \t "+name);


const newArray = [...empArr]; //spread operator -> making copy


const arr1 = [1, 2, 3];
const arr2 = [...arr1, newArray];
console.log(arr2);


const newE1 = {...e1};
console.log(newE1);

// 8. Rest Parameters
function sum(...nums) {
  return nums.reduce((acc, n) => acc + n, 0);
}
console.log(`Sum: ${sum(1, 2, 3, 4)}`);


function myFun(a, b, ...XX) {
  console.log("a", a);
  console.log("b", b);
  console.log("manyMoreArgs", XX);
}

myFun("one", "two", "three", "four", "five", "six");

// 14. For...of Loop
const nums = [10, 20, 30];
for ( const n of nums) {
 //   n=n+10;
  console.log(n);
}

// 15. Map and Set
const myMap = new Map();
myMap.set('a', 1);
myMap.set('b', 2);
console.log(myMap.get('a'));

const mySet = new Set([1, 2, 2, 3]);
console.log(...mySet);


// 16. Optional Chaining and Nullish Coalescing
const user = { profile: { email: undefined, gender:'male' } };
console.log(user?.profile?.email ?? 'Email not provided');



// 12. Promises
const asyncTask = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Task done!'), 1000);
});
asyncTask.then(result => console.log(result));


fetch('https://jsonplaceholder.typicode.com/posts/1000')
  .then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json(); // Parse the response body as JSON
  },)
  .then(data => {
    console.log(data); // Process the JSON data
  })
  .catch(error => {
    console.error('Fetch error:', error); // Handle errors
  });

