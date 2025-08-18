"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var employee_1 = require("./employee");
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, department, salary) {
        return _super.call(this, name, department, salary) || this;
    }
    Manager.prototype.showDepartment = function () {
        return "".concat(this.name, " manages ").concat(this.department);
    };
    return Manager;
}(employee_1.Employee));
var m1 = new Manager("Abhishek", "IT", 50000);
console.log(m1.getDetails());
console.log(m1.showDepartment());
console.log(m1.name);
console.log(m1.salary);
var m2 = new Manager("Abhijeet", "IT");
console.log(m2.getDetails());
