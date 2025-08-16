type Admin = {
  role: 'admin';
  permissions: string[];
};

type UserT = {
  username: string;
  email: string;
};

// 🔀 Union Type: user can be either Admin or User
type AdminOrUser = Admin | UserT;

// 🔗 Intersection Type: user is both Admin and User
type AdminUser = Admin & UserT;

// Function to print info for union type
function printUnionInfo(user: AdminOrUser) {
  if ('permissions' in user) {
    console.log(`Admin with permissions: ${user.permissions.join(', ')}`);
  } else {
    console.log(`Regular user: ${user.username}, ${user.email}`);
  }
}

// Function to print info for intersection type
function printIntersectionInfo(user: AdminUser) {
  console.log(`AdminUser: ${user.username}, ${user.email}, Permissions: ${user.permissions.join(', ')}`);
}

// 👉 Using the union type
const user13: AdminOrUser = {
  role: 'admin',
  permissions: ['read', 'write']
};

const user2: AdminOrUser = {
  username: 'john_doe',
  email: 'john@example.com'
};

// 👉 Using the intersection type
const adminUser: AdminUser = {
  role: 'admin',
  permissions: ['delete', 'modify'],
  username: 'superadmin',
  email: 'admin@example.com'
};

let str:number = 5;
if(typeof str === "number"){
  str=str+10
  console.log(`${str} is number `)
}else{
  console.log(`${str} is not a number `)
}

// Test functions
printUnionInfo(user13);
printUnionInfo(user2);
printIntersectionInfo(adminUser);

//Union (|): A value can be either Admin or User.

//Intersection (&): A value must satisfy both Admin and User.


