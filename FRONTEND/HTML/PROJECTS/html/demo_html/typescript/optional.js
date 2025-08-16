function greetMe(name, greeting) {
    if (name === void 0) { name = "Demo"; }
    if (greeting) {
        return "".concat(greeting, ", ").concat(name, "!");
    }
    else {
        return "Hello, ".concat(name, "!");
    }
}
console.log(greetMe());
// ✅ Call with both parameters
console.log(greetMe('Alice', 'Good morning')); // Output: Good morning, Alice!
// ✅ Call with only the required parameter
console.log(greetMe('Bob')); // Output: Hello, Bob!
