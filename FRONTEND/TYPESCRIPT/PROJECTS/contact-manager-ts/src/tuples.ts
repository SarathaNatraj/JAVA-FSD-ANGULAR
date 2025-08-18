let person :[string,number];

person=["bala", 22]; //valid
//person=[25, "bala"]
//person=["bala"]

let emp:[string,number,string?];
emp=["karthik", 101];
emp=["karthik",102,"Developer"]

type httpResponse =[statusCode:number,message:string];

function fetchData():httpResponse{
    return[200, "success"];
}

const [statusC,msg]=fetchData();
console.log(statusC,msg);
