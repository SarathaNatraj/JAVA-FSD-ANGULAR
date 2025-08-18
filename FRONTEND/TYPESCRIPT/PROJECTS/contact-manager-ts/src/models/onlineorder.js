"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OnlineOrder = /** @class */ (function () {
    function OnlineOrder(id, customer, products) {
        this.orderid = id;
        this.customer = customer;
        this.products = products;
    }
    OnlineOrder.prototype.totalAmount = function () {
        return this.products.reduce(function (sum, p) { return sum + p.price; }, 0);
    };
    return OnlineOrder;
}());
//Usage
var customer = { id: 1, name: "Anup", email: "anup@gmail.com" };
var products = [
    { id: 101, name: "Laptops", price: 50000, category: "Electronics" },
    { id: 102, name: "Mobiles", price: 10000 }
];
var order = new OnlineOrder(1001, customer, products);
console.log("Customer : ".concat(order.customer.name));
console.log("TotalAmount : ".concat(order.totalAmount()));
