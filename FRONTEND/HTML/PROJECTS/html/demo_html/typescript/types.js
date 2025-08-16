// Function to print info for union type
function printUnionInfo(user) {
    if ('permissions' in user) {
        console.log("Admin with permissions: ".concat(user.permissions.join(', ')));
    }
    else {
        console.log("Regular user: ".concat(user.username, ", ").concat(user.email));
    }
}
// Function to print info for intersection type
function printIntersectionInfo(user) {
    console.log("AdminUser: ".concat(user.username, ", ").concat(user.email, ", Permissions: ").concat(user.permissions.join(', ')));
}
// 👉 Using the union type
var user13 = {
    role: 'admin',
    permissions: ['read', 'write']
};
var user2 = {
    username: 'john_doe',
    email: 'john@example.com'
};
// 👉 Using the intersection type
var adminUser = {
    role: 'admin',
    permissions: ['delete', 'modify'],
    username: 'superadmin',
    email: 'admin@example.com'
};
var str = 5;
if (typeof str === "number") {
    str = str + 10;
    console.log("".concat(str, " is number "));
}
else {
    console.log("".concat(str, " is not a number "));
}
// Test functions
printUnionInfo(user13);
printUnionInfo(user2);
printIntersectionInfo(adminUser);
//Union (|): A value can be either Admin or User.
//Intersection (&): A value must satisfy both Admin and User.
