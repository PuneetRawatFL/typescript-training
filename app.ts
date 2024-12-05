//Data types
// Primitive Data Types
// - number
let a = 12;
// - string
let str = "String";
// - boolean
let bool = true;

//Reference data types
// - array
//eg, mix array
let arr = [1, 2, 3, 4, 5, "Hello"];
//eg, array with only numbers
let arr1: Number[] = [1, 2, 3, 4, 5];

// - tuples - same as array but we specify fix number of elements with data type
//eg1
let tup: [string, Number] = ["hell", 12]; //will only accept value in specifed manner
//eg2
let tup2: [Number, String] = [113, "tuple"];

//enums - Enumerations
//eg1
enum userRoles {
    ADMIN = "admin",
    GUEST = "guest",
    SUPER_ADMIN = "super_admin",
}

//any - can take any data type and hold value
let an: any;
an = 12; //number
an = "Any"; //string

//unknown - same as any but we need to use typecheck everytime to use the variable
var unk: unknown;
unk = 12;
unk = "Unknown";
if (typeof unk === "string") {
    unk.toUpperCase();
}

//void - used for functions that do not return a value
function abc(): void {
    console.log("This is a void function");
}

//null - cannot assign any value to the variable
let nll: null;
// nll = 12; // will give error

//undefined - declared but not assigned any value
let undf: undefined;

//never -  indicate functions or variables will never return a value
//eg, never ending function
function abcd(): never {
    while (true);
}

//type annotation - stating type of variable or function parameter and return type
//stating variable
let ab: number;
//stating function parameter and return type
function aabb(a: number): void {
    console.log("parameter with type annotation");
}

//type inference - TS utomatically determines the type of a variable based on the value assigned to it.
let inf = 12; //type: number

//Interfaces
//- defines structure of object
interface User {
    name: string;
    email: string;
    password: string;
    age?: number; //optional property
}
function intf(obj: User) {
    obj.name;
}
intf({ name: "Puneet", email: "puneet@gmail.com", password: "12345" });
intf({ name: "Puneet", email: "puneet@gmail.com", password: "12345", age: 23 });

//extending interfaces
//create new interfaces by inheriting properties and methods from existing interfaces
//eg
interface Admin extends User {
    isAdmin: boolean;
}

//type aliases - lets you create new name for a type
//eg
type abc = number; //creating new name for type 'number'
let x: abc; //assigning type abc(number) to variable x
//eg2 - useful case
type value = string | number | null; //value can be any of the mentioned types
let z: value; //assigning type value(string | number | null) to variable z

//intersection - allows us to combine multiple types into single type
//eg
type customer = { name: string; email: string };
//combining customer type and admin type
type admin = customer & {
    password: string;
};
type intersection = admin;
const adminUser: intersection = {
    name: "John Doe",
    email: "john.doe@example.com",
    password: "securepassword123",
};
console.log(adminUser); //adminUser will have all the types combined

// ------------------------------------------------------------------------------------------- //

// classes in typescript
class person1 {
    name = " Puneet";
    age = 23;
    gender = "male";
}
let p1 = new person1(); //output: person1 { name: ' Puneet', age: 23, gender: 'male' }

//class with constructor
class person2 {
    constructor(
        public name: string,
        public age: number,
        public gender: string
    ) {}
}
let p2 = new person2("Person 2", 24, "female"); // output: person2 { name: 'Person 2', age: 24, gender: 'female' }

//class with constructor with default values
class person3 {
    constructor(
        public name: string,
        public age: number,
        public gender: string,
        public isAdult: boolean = true
    ) {}
}
let p3 = new person3("Person 2", 24, "female"); // output: person3 { name: 'Person 2', age: 24, gender: 'female' }
let p4 = new person3("Person 2", 24, "female", false); // output: person3 { name: 'Person 2', age: 24, gender: 'female', false }

//access modifiers - public, private, protected
//public - can be accessed withtin and outside class
//private - can be accessed within the class only
//protected - can be accessed within the class and its subclasses

class parentClass {
    public name;
    private age = 0;
    protected gender = "male";
    constructor(name: string) {
        this.name = name;
    }
    getDetails() {
        console.log(this.name);
    }
}
class childClass extends parentClass {
    constructor(public gender: string, public readonly name: string) {
        //readonly ensures that name cannot be assigned when outside the class
        super(name);
    }
    changeDetails() {
        this.age = 12; //error as age is a private property
        this.gender = "female"; // no error as gender is protected property and can be used within subclass
    }
}
let parent1 = new parentClass("John");
console.log(parent1.name); // output: john
console.log(parent1.gender); //error: gender is protected property

//getter and setter
// typescript uses 'get' and 'set' keywords for getter and setter respectively
class User1 {
    constructor(public _name: string, public email: string) {}

    //getter in ts
    get name() {
        return this._name;
    }

    //setter in ts
    set name(value: string) {
        this._name = value;
    }
}
//creating object
let u1 = new User1("Kate", "kate@gmail.com");

//we can set name by calling setter method like a property
u1.name = "Mary";

//we can get name by calling getter method like a property
u1.name; //output: Mary

//
//static members
//static values can be used without creating instance of the class
//static members do not get included in the instance of the class
//eg
class mobile {
    static model = 15;

    static getModelName() {
        return "iphone";
    }
}
mobile.model; //output: 15
mobile.getModelName(); //output: iphone

//
//abstract classes and methods
//designed to be extended by other classes and is not instantiated directly
abstract class car {
    abstract startCar(): void;

    move() {
        console.log("moving");
    }
}

class electricCar extends car {
    startCar(): void {
        console.log("Electric car starting");
    }
}
let e1 = new electricCar();
e1.startCar(); //output: electric car starting
e1.move(); //output: moving

//
//functions
//we need to mention return type
function fn1(): void {
    console.log("this is a function");
}
//function with return type
function fn2(): number {
    return 12;
}
//function with parameter
function fn3(value: string): void {
    console.log(value);
}
//function accepting callback as a parameter
//cb is a callback funtion
function fn4(value: string, cb: (num: number) => void): void {
    console.log(value);

    //calling callback function
    cb(12);
}
fn4("with callback", (num: number) => {
    console.log(num);
});

//rest parameters
//can accept any number of arguments
function restPara(...args: number[]) {
    console.log(args);
    console.log("rest parameters");
}
restPara(1, 2, 3, 4, 5, 6);

//function overloading
function add(a: string, b: string): string;
function add(a: number, b: number): number;

function add(a: any, b: any): any {
    return a + b;
}
add("Hello", "World");
add(11, 12);

//
//generrics - lets us create reusable components with different data types
//eg - generic functions
function log<T>(arg: T) {
    console.log(arg);
}
log<string>("Hello"); //calling for type string
log<number>(12); //calling for type number

//generic interfaces
interface genInterface<T> {
    name: string;
    age: number;
    key: T;
}
function genInter(obj: genInterface<string>) {}

genInter({ name: "Puneet", age: 23, key: "jdfjdkjf" });

//generic classes
class genClass<T> {
    constructor(public key: T) {}
}
let g1 = new genClass<string>("1234");
console.log(g1);

//modules
//import function
import { addPayment } from "./payment";
addPayment(12);

//import class with default export
import Payment from "./payment";
let pay1 = new Payment(24);

//type assertion - when we know more about the type of a value
let assert: any;

(assert as string).toLowerCase; // now i can use string methods
(<string>assert).toLowerCase; //another way

//type casting - converting one type into another
//eg1
let cast: any = "This is a string";
let len: number = (cast as string).length;
console.log(len);

//eg2 number to string
let num1: number = 42;
let str1: string = String(num1); // conversion to string
console.log(typeof str1, str1);

//eg3 - string to number
let str2: string = "20";
let num2: number = parseInt(str2); //conversion to number
console.log(typeof num2, num2);

//Utility types
//1. partial <T>
interface utility1 {
    name: string;
    age: number;
    email: string;
}
type partialUtility = Partial<utility1>;
//we can pass partial properties as all properties are optional
let partialUser: partialUtility = {
    email: "partial@gmail.com",
};

//2. Required<T>
interface utility2 {
    name?: string;
    age?: number;
    email?: string;
}
type requiredUtility = Required<utility2>;
//all properties are required even after providing optional property
let requiredUser: requiredUtility = {
    name: "Puneet",
    age: 23,
    email: "puneet@gmail.com",
};

//3. Readonly<T>
interface utility3 {
    name: string;
    age: number;
    email: string;
}
type readonlyUtility = Readonly<utility3>;

let readonlyUser: readonlyUtility = {
    name: "Puneet",
    age: 23,
    email: "puneet@gmail.com",
};
// readonlyUser.name = "new name"; // error as it is only a read only property

//4. Record<K,T>
type roles = "admin" | "user" | "guest";

type recordUtility = Record<roles, string>; //all the roles will have the type string now

let recordUser: recordUtility = {
    admin: "Alice",
    user: "Bob",
    guest: "claire",
};

//5. Pick<K,T>
type utility5 = {
    name: string;
    age: number;
    email: string;
};

//we can pick set of properties according to our wish
type pickUtility = Pick<utility5, "name" | "email">;

let pickUser: pickUtility = {
    name: "Puneet",
    email: "email",
};

//6. Omit<K,T>
type utility6 = {
    name: string;
    age: number;
    email: string;
};
//we can remove set of properties we want to remove
type omitUtility = Omit<utility6, "email">;

let omitUser: omitUtility = {
    name: "puneet",
    age: 23,
};

//7. Exclude<T,U>
type T1 = "a" | "b" | "c";
type U1 = "b";
//excludes the common propeties
type excludeUtility = Exclude<T1, U1>;

let excludeUser: excludeUtility = "a"; // only "a" and "c" can be assigned

//8. Extract<T,U>
type T2 = "a" | "b" | "c";
type U2 = "b";
//only common properties can be assigned
type extractUtility = Extract<T2, U2>;

let extractUser: extractUtility = "b"; //only b can be assigned

//9. NonNullabe<T>
type T3 = string | number | null | undefined;

type nonNullUtility = NonNullable<T3>;
//we cannot assign null or undefined
let nonNullUser: nonNullUtility = 12; // only string or number can be assigned

//10. ReturnType<T>
//we use return type to create a type that matches the return type of a function
function getUser() {
    return {
        name: "ace",
        age: 23,
        email: "email",
    };
}
//assigning the return type of function
type returnUtility = ReturnType<typeof getUser>;

let returnUser: returnUtility = {
    name: "Hello",
    age: 35,
    email: "email",
};

//TS Union Types
// - allow us to specify that a value can be one of several types
//eg1 - union with type
let value: string | number;

value = "Hello"; // valid
value = 42; // valid
// value = true; // error: Type 'boolean' is not assignable to type 'string | number'

//eg2 - union with function
function printId(id: string | number): void {
    console.log(id);
}

printId("123"); // Output: ID: 123
printId(123); // Output: ID: 123

//eg3 -  array of mixed types
let mixedArray: (string | number)[] = ["Alice", 30, "Bob", 25];
