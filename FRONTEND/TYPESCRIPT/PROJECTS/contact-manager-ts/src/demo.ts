//Variable declaration
//let/const variableName:datatype = value;

let message:string = "Hello TS";
console.log(message);

let count:number = 15;
let a=15; //understood by the compiler a is a number type -> type inference

//returntype name of fun (function parameters) { } - Java  fn definition
//function name_of_fun(parameters) : return_type{}  - TS fn definition
function calculateDiscountedPrice(price: number,discount:number) : any{
    if(discount <0 || discount > 100){
        throw new Error("Discount must be between 0 and 100");
    }
    price= price - (price*discount) / 100;
    return "price : "+price;
}

let finalPrice = calculateDiscountedPrice(1000, 10);
console.log(" Final Price : ",finalPrice);

//country:string="India" - default parameters
//age?:number - Optional parameters
//name:string - must parameters
function welcome(name:string, age?:number,country:string="India") : string{
    return `${name} is ${age ?? "unknown"} years old from ${country}`;
}

console.log(welcome("Arvind",25)); //Arvind is 25 years old from India
console.log(welcome("Anup")); //Anup is unknown years old from India
console.log(welcome("Balaji", 25, "USA")); //Balaji is 25 years old from USA 

//console.log(welcome("Balaji", "USA"));

//arrow functions
const add = (a:number, b:number) : number => {
    return a+b;
}
console.log(add(4,5));

function logMessage(message:string):void{
    console.log(" no return "+message);
}
logMessage("demo");