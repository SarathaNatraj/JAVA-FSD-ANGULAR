function getFirstElement<T>(arr: T[]): T{
    return arr[0];
}
console.log(getFirstElement<number>([10,20,30]));
console.log(getFirstElement<string>(["abc","dec","thg"]));

//generic interface
interface ApiResponse<T> {
    status:number,
    data:T
}

const userResponse:ApiResponse<{id:number, name:string}> = {status:200,
    data: {id:1, name:"Lavanya"}
}

console.log(userResponse.data.name);

interface Repository<T>{
    findById(id:number) :T | null;
    findAll():T[]
    save(item:T) :void;
}

type User = {id:number, name:string, email:string};
type Product = {id:number,name: string, price:number};

//User Repository
class UserRepository implements Repository<User>{
    private users:User[] = [];
    findById(id: number): User | null {
     //   return this.users.filter(u=> u.id === id )|| null;
        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].id === id) {
            return this.users[i];
            break; // Exit early once found
            }
        }
        return null;
    }

    
    findAll(): User[] {
        return this.users;
    }
    save(item: User): void {
       this.users.push(item);
    }
    
}

//Product Repository
class ProductRepository implements Repository<Product>{
    private products:Product[] = [];
    findById(id: number): Product | null {
     //   return this.products.find(u=> u.id === id )|| null;
     return null;
    }
    findAll(): Product[] {
        return this.products;
    }
    save(item: Product): void {
       this.products.push(item);
    }
    
}

//
const userRepo = new UserRepository();
userRepo.save({id:1, name:"Deekshitha", email:"deekshitha@gmail.com"});
userRepo.save({id:2, name:"Pratap", email:"pratap@gmail.com"});
console.log(userRepo.findAll());
console.log(userRepo.findById(2));