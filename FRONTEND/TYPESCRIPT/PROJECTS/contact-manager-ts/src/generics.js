function getFirstElement(arr) {
    return arr[0];
}
console.log(getFirstElement([10, 20, 30]));
console.log(getFirstElement(["abc", "dec", "thg"]));
var userResponse = { status: 200,
    data: { id: 1, name: "Lavanya" }
};
console.log(userResponse.data.name);
//User Repository
var UserRepository = /** @class */ (function () {
    function UserRepository() {
        this.users = [];
    }
    UserRepository.prototype.findById = function (id) {
        //   return this.users.filter(u=> u.id === id )|| null;
        for (var i = 0; i < this.users.length; i++) {
            if (this.users[i].id === id) {
                return this.users[i];
                break; // Exit early once found
            }
        }
        return null;
    };
    UserRepository.prototype.findAll = function () {
        return this.users;
    };
    UserRepository.prototype.save = function (item) {
        this.users.push(item);
    };
    return UserRepository;
}());
//Product Repository
var ProductRepository = /** @class */ (function () {
    function ProductRepository() {
        this.products = [];
    }
    ProductRepository.prototype.findById = function (id) {
        //   return this.products.find(u=> u.id === id )|| null;
        return null;
    };
    ProductRepository.prototype.findAll = function () {
        return this.products;
    };
    ProductRepository.prototype.save = function (item) {
        this.products.push(item);
    };
    return ProductRepository;
}());
//
var userRepo = new UserRepository();
userRepo.save({ id: 1, name: "Deekshitha", email: "deekshitha@gmail.com" });
userRepo.save({ id: 2, name: "Pratap", email: "pratap@gmail.com" });
console.log(userRepo.findAll());
console.log(userRepo.findById(2));
