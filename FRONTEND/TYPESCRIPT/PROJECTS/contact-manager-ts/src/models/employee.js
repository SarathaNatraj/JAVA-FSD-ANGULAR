"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(name, department, salary) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }
    Employee.prototype.getDetails = function () {
        return "".concat(this.name, " works on ").concat(this.department);
    };
    return Employee;
}());
exports.Employee = Employee;
