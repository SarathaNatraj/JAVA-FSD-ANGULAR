var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right"; //3
})(Direction || (Direction = {}));
var move = Direction.Left;
console.log(move);
//assign values to  enums
var Status;
(function (Status) {
    Status[Status["success"] = 200] = "success";
    Status[Status["notfound"] = 404] = "notfound";
    Status[Status["servererror"] = 500] = "servererror";
})(Status || (Status = {}));
var response = Status.notfound;
console.log(response);
//string enums
var PaymentMethod;
(function (PaymentMethod) {
    PaymentMethod["creditcard"] = "CREDIT CARD";
    PaymentMethod["upi"] = "UPI";
    PaymentMethod["netbanking"] = "NET BANKING";
})(PaymentMethod || (PaymentMethod = {}));
var paymentMethod = PaymentMethod.creditcard;
console.log(paymentMethod);
//hetrogenous values
var Result;
(function (Result) {
    Result["pass"] = "PASS";
    Result[Result["fail"] = 0] = "fail";
    Result[Result["absent"] = 1] = "absent";
})(Result || (Result = {}));
var candidateResult = Result.absent;
console.log(candidateResult);
//Enums in functions
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
function checkAccess(role) {
    switch (role) {
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
