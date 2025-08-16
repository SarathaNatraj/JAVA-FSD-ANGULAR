var Box = /** @class */ (function () {
    function Box(value) {
        this.contents = value;
    }
    Box.prototype.display = function () {
        console.log(this.contents);
    };
    return Box;
}());
function displayData(args) {
    return args;
}
//console.log(letters);
console.log(displayData(45));
console.log(displayData("45th street"));
console.log(displayData(true));
var stringBox = new Box('string ');
var numberBox = new Box(45);
stringBox.display();
numberBox.display();
