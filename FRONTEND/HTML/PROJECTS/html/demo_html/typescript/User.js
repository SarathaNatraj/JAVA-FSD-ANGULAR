var user1 = {
    id: 101,
    name: "Alice",
    email: "alice@example.com",
    isActive: true,
};
function greetUser(user) {
    console.log("Hello, ".concat(user.name, "!"));
}
greetUser(user1);
