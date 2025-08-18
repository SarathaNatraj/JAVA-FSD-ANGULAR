export interface Product{
    id:number;
    name:string;
    price:number;
    category?:string
}

export interface Customer{
    id:number;
    name:string;
    email:string
}

export interface Order{
    orderid:number;
    customer:Customer;
    products:Product[];
    totalAmount():number;
}