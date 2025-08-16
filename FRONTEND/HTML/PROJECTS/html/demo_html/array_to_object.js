/* Write a Program to convert an array of objects to an object
	based on a given key */


const convert = (array,key) => {
	// Write your code here
	if(!Array.isArray(array)) {
	return null;
}
const res=(array,key)=>
array.reduce((obj,item)=> {
	obj[item[key]]=item
	return obj
} , {});
return res(array,key)
};
	

