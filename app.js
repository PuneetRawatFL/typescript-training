"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
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
var x; //assigning type abc(number) to variable x
var z; //assigning type value(string | number | null) to variable z
var adminUser = {
    name: "John Doe",
    email: "john.doe@example.com",
    password: "securepassword123",
};
console.log(adminUser); //adminUser will have all the types combined
// ------------------------------------------------------------------------------------------- //
// classes in typescript
var person1 = /** @class */ (function () {
    function person1() {
        this.name = " Puneet";
        this.age = 23;
        this.gender = "male";
    }
    return person1;
}());
var p1 = new person1(); //output: person1 { name: ' Puneet', age: 23, gender: 'male' }
//class with constructor
var person2 = /** @class */ (function () {
    function person2(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    return person2;
}());
var p2 = new person2("Person 2", 24, "female"); // output: person2 { name: 'Person 2', age: 24, gender: 'female' }
//class with constructor with default values
var person3 = /** @class */ (function () {
    function person3(name, age, gender, isAdult) {
        if (isAdult === void 0) { isAdult = true; }
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.isAdult = isAdult;
    }
    return person3;
}());
var p3 = new person3("Person 2", 24, "female"); // output: person3 { name: 'Person 2', age: 24, gender: 'female' }
var p4 = new person3("Person 2", 24, "female", false); // output: person3 { name: 'Person 2', age: 24, gender: 'female', false }
//access modifiers - public, private, protected
//public - can be accessed withtin and outside class
//private - can be accessed within the class only
//protected - can be accessed within the class and its subclasses
var parentClass = /** @class */ (function () {
    function parentClass(name) {
        this.age = 0;
        this.gender = "male";
        this.name = name;
    }
    parentClass.prototype.getDetails = function () {
        console.log(this.name);
    };
    return parentClass;
}());
var childClass = /** @class */ (function (_super) {
    __extends(childClass, _super);
    function childClass(gender, name) {
        //readonly ensures that name cannot be assigned when outside the class
        var _this = _super.call(this, name) || this;
        _this.gender = gender;
        _this.name = name;
        return _this;
    }
    childClass.prototype.changeDetails = function () {
        this.age = 12; //error as age is a private property
        this.gender = "female"; // no error as gender is protected property and can be used within subclass
    };
    return childClass;
}(parentClass));
var parent1 = new parentClass("John");
console.log(parent1.name); // output: john
console.log(parent1.gender); //error: gender is protected property
//getter and setter
// typescript uses 'get' and 'set' keywords for getter and setter respectively
var User1 = /** @class */ (function () {
    function User1(_name, email) {
        this._name = _name;
        this.email = email;
    }
    Object.defineProperty(User1.prototype, "name", {
        //getter in ts
        get: function () {
            return this._name;
        },
        //setter in ts
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    return User1;
}());
//creating object
var u1 = new User1("Kate", "kate@gmail.com");
//we can set name by calling setter method like a property
u1.name = "Mary";
//we can get name by calling getter method like a property
u1.name; //output: Mary
//
//static members
//static values can be used without creating instance of the class
//static members do not get included in the instance of the class
//eg
var mobile = /** @class */ (function () {
    function mobile() {
    }
    mobile.getModelName = function () {
        return "iphone";
    };
    mobile.model = 15;
    return mobile;
}());
mobile.model; //output: 15
mobile.getModelName(); //output: iphone
//
//abstract classes and methods
//designed to be extended by other classes and is not instantiated directly
var car = /** @class */ (function () {
    function car() {
    }
    car.prototype.move = function () {
        console.log("moving");
    };
    return car;
}());
var electricCar = /** @class */ (function (_super) {
    __extends(electricCar, _super);
    function electricCar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    electricCar.prototype.startCar = function () {
        console.log("Electric car starting");
    };
    return electricCar;
}(car));
var e1 = new electricCar();
e1.startCar(); //output: electric car starting
e1.move(); //output: moving
//
//functions
//we need to mention return type
function fn1() {
    console.log("this is a function");
}
//function with return type
function fn2() {
    return 12;
}
//function with parameter
function fn3(value) {
    console.log(value);
}
//function accepting callback as a parameter
//cb is a callback funtion
function fn4(value, cb) {
    console.log(value);
    //calling callback function
    cb(12);
}
fn4("with callback", function (num) {
    console.log(num);
});
//rest parameters
//can accept any number of arguments
function restPara() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.log(args);
    console.log("rest parameters");
}
restPara(1, 2, 3, 4, 5, 6);
function add(a, b) {
    return a + b;
}
add("Hello", "World");
add(11, 12);
//
//generrics - lets us create reusable components with different data types
//eg - generic functions
function log(arg) {
    console.log(arg);
}
log("Hello"); //calling for type string
log(12); //calling for type number
function genInter(obj) { }
genInter({ name: "Puneet", age: 23, key: "jdfjdkjf" });
//generic classes
var genClass = /** @class */ (function () {
    function genClass(key) {
        this.key = key;
    }
    return genClass;
}());
var g1 = new genClass("1234");
console.log(g1);
//modules
//import function
var payment_1 = require("./payment");
(0, payment_1.addPayment)(12);
