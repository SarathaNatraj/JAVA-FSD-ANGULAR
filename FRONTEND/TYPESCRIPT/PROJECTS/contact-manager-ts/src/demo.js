//Variable declaration
//let/const variableName:datatype = value;
var message = "Hello TS";
console.log(message);
var count = 15;
var a = 15; //understood by the compiler a is a number type -> type inference
//returntype name of fun (function parameters) { } - Java  fn definition
//function name_of_fun(parameters) : return_type{}  - TS fn definition
function calculateDiscountedPrice(price, discount) {
    if (discount < 0 || discount > 100) {
        throw new Error("Discount must be between 0 and 100");
    }
    price = price - (price * discount) / 100;
    return "price : " + price;
}
var finalPrice = calculateDiscountedPrice(1000, 10);
console.log(" Final Price : ", finalPrice);
//country:string="India" - default parameters
//age?:number - Optional parameters
//name:string - must parameters
function welcome(name, age, country) {
    if (country === void 0) { country = "India"; }
    return "".concat(name, " is ").concat(age !== null && age !== void 0 ? age : "unknown", " years old from ").concat(country);
}
console.log(welcome("Arvind", 25)); //Arvind is 25 years old from India
console.log(welcome("Anup")); //Anup is unknown years old from India
console.log(welcome("Balaji", 25, "USA")); //Balaji is 25 years old from USA 
//console.log(welcome("Balaji", "USA"));
//arrow functions
var add = function (a, b) {
    return a + b;
};
console.log(add(4, 5));
function logMessage(message) {
    console.log(" no return " + message);
}
logMessage("demo");
