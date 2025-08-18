import { Customer, Order,Product } from "./types";

class OnlineOrder implements Order {
    orderid: number;
    customer: Customer;
    products: Product[];
    
    
    constructor(id:number, customer:Customer, products:Product[]) {
        this.orderid=id;
        this.customer=customer;
        this.products=products;
        
    }

    totalAmount(): number {
        return this.products.reduce((sum,p)=> sum+p.price,0);
    }
    
}

//Usage
const customer:Customer = {id:1, name:"Anup", email:"anup@gmail.com"};
const products:Product[] = [
    {id:101, name:"Laptops", price:50000, category:"Electronics"},
    {id:102, name:"Mobiles", price:10000}
];

const order = new OnlineOrder(1001, customer, products);
console.log(`Customer : ${order.customer.name}`);
console.log(`TotalAmount : ${order.totalAmount()}`);

