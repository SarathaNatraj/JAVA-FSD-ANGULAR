//generic class definition
class Box<Type> {
    contents: Type
    constructor(value:Type) {
        this.contents=value;
        
    }
    display():void{
        console.log(this.contents);
    }
}

//Function generic type definition
function displayData<Type>(ssd:Type):Type{
    return ssd;

}

//console.log(letters);

console.log(displayData(45));
console.log(displayData("45th street"));
console.log(displayData(true));



const stringBox = new Box('string ');
const numberBox = new Box(45);

stringBox.display();
numberBox.display();
