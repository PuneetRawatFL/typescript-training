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
