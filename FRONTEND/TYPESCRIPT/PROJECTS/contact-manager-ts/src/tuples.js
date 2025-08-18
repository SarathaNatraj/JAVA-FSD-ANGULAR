var person;
person = ["bala", 22]; //valid
//person=[25, "bala"]
//person=["bala"]
var emp;
emp = ["karthik", 101];
emp = ["karthik", 102, "Developer"];
function fetchData() {
    return [200, "sucess"];
}
var _a = fetchData(), statusC = _a[0], msg = _a[1];
console.log(statusC, msg);
