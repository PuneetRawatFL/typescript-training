//Data types
// Primitive Data Types
// - number
var a = 12;
// - string
var str = "String";
// - boolean
var bool = true;
//Reference data types
// - array
//eg, mix array
var arr = [1, 2, 3, 4, 5, "Hello"];
//eg, array with only numbers
var arr1 = [1, 2, 3, 4, 5];
// - tuples - same as array but we specify fix number of elements with data type
//eg1
var tup = ["hell", 12]; //will only accept value in specifed manner
//eg2
var tup2 = [113, "tuple"];
//enums - Enumerations
//eg1
var userRoles;
(function (userRoles) {
    userRoles["ADMIN"] = "admin";
    userRoles["GUEST"] = "guest";
    userRoles["SUPER_ADMIN"] = "super_admin";
})(userRoles || (userRoles = {}));
//any - can take any data type and hold value
var an;
an = 12; //number
an = "Any"; //string
//unknown - same as any but we need to use typecheck everytime to use the variable
var unk;
unk = 12;
unk = "Unknown";
if (typeof unk === "string") {
    unk.toUpperCase();
}
//void - used for functions that do not return a value
function abc() {
    console.log("This is a void function");
}
//null - cannot assign any value to the variable
var nll;
// nll = 12; // will give error
//undefined - declared but not assigned any value
var undf;
//never -  indicate functions or variables will never return a value
//eg, never ending function
function abcd() {
    while (true)
        ;
}
//type annotation - stating type of variable or function parameter and return type
//stating variable
var ab;
//stating function parameter and return type
function aabb(a) {
    console.log("parameter with type annotation");
}
//type inference - TS utomatically determines the type of a variable based on the value assigned to it.
var inf = 12; //type: number
function intf(obj) {
    obj.name;
}
intf({ name: "Puneet", email: "puneet@gmail.com", password: "12345" });
intf({ name: "Puneet", email: "puneet@gmail.com", password: "12345", age: 23 });
