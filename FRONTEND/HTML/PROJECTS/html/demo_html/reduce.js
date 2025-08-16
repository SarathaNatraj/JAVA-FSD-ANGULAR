// Create a list of fruits with their properties (name, color, pricePerKg)
// and convert it into a format so that for a given fruit name
// retrieval of its color and pricePerKg value is fast


// Write your code here
const fruitArray = [
    {name:'apple',color:'red',price:170},
    {name:'orange',color:'orange',price:200},
    {name:'pineapple',color:'yellow',price:160},
    {name:'berry',color:'blue',price:100},
];
const convertToobj=(fruitArray1,keyfield)=>
fruitArray1.reduce((obj,item) => {
    obj[item[keyfield]]=item;
    return obj;
}, {});
const fruitobj=convertToobj(fruitArray,'name');
console.log(fruitobj);
console.log(fruitobj.apple);
console.log(fruitobj.orange);
console.log(fruitobj.pineapple);
console.log(fruitobj.berry);

