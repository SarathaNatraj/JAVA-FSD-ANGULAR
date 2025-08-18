enum Direction{
    Up, //0
    Down, //1
    Left, //2
    Right //3
}

let move: Direction = Direction.Left;
console.log(move);

//assign values to  enums
enum Status{
    success = 200,
    notfound = 404,
    servererror = 500
}

let response:Status = Status.notfound;
console.log(response);

//string enums
enum PaymentMethod{
    creditcard = "CREDIT CARD",
    upi = "UPI",
    netbanking = "NET BANKING"
}

let paymentMethod:PaymentMethod = PaymentMethod.creditcard;
console.log(paymentMethod);

//hetrogenous values
enum Result{
    pass = "PASS",
    fail = 0, 
    absent = 1
}
let candidateResult:Result = Result.absent;
console.log(candidateResult);

//Enums in functions

enum Role{
    Admin,
    User,
    Guest
}
function checkAccess(role:Role):string{
    switch(role){
        case Role.Admin:
            return "Full access granted";
        case Role.Guest:
            return "Guest access only";
        case Role.User:
            return "Limited access";
        default:
            return "No access";
    }
}

console.log(checkAccess(Role.Admin));
console.log(checkAccess(Role.Guest));