function greetMe(name: string ="Demo", greeting?: string): string {
  if (greeting) {
    return `${greeting}, ${name}!`;
  } else {
    return `Hello, ${name}!`;
  }
}

console.log(greetMe());
// ✅ Call with both parameters
console.log(greetMe('Alice', 'Good morning')); // Output: Good morning, Alice!

// ✅ Call with only the required parameter
console.log(greetMe('Bob')); // Output: Hello, Bob!
